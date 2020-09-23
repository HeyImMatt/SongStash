import os
from unittest import TestCase
from sqlalchemy import exc
from dotenv import load_dotenv
from forms import UserSignupForm, UserLoginForm
from models import db, Annotation, Song, SongAnnotation, Stash, StashSong, User, UserSong, UserStash

load_dotenv()
os.environ['SQLALCHEMY_DATABASE_URI'] = os.getenv('SQLALCHEMY_TEST_DATABASE_URI')

from app import app, CURR_USER_KEY, CURR_USER_NAME

db.create_all()

app.config['WTF_CSRF_ENABLED'] = False

class RoutesTestCases(TestCase):
    """Test routes"""

    def setUp(self):
        """Create test client, add sample data."""
        db.drop_all()
        db.create_all()

        self.uid = 12345
        u = User.signup("testing", "password")
        u.id = self.uid
        db.session.commit()

        self.user = User.query.get(self.uid)

        self.song_uid = 11111
        song = Song.create_song("test title", "test artist", "test lyrics", self.uid)
        song.id = self.song_uid
        self.song = Song.query.get(self.song_uid)
        db.session.commit()

        user_song = UserSong.create_user_song(self.song_uid, self.uid)

        self.stash_uid = 22222
        stash = Stash.create_stash("test stash name", self.uid)
        stash.id = self.stash_uid
        self.stash = Stash.query.get(self.stash_uid)
        db.session.commit()

        user_stash = UserStash.create_user_stash(self.stash_uid, self.uid)
        stash_song = StashSong.create_stash_song(self.song_uid, self.stash_uid)
        db.session.commit()

        self.annotation_uid = 33333
        annotation = Annotation.create_annotation("test annotation", 5, self.uid, self.song_uid)
        annotation.id = self.annotation_uid
        self.annotation = annotation.query.get(self.annotation_uid)
        db.session.commit()

        SongAnnotation.create_song_annotation(self.annotation_uid, self.song_uid)
        db.session.commit()

        self.client = app.test_client()

    def tearDown(self):
        res = super().tearDown()
        db.session.rollback()
        return res

    # Home, Signup, Login, and Logout Routes

    def test_logged_out_home_route(self):
        """It should render homepage for non-user"""
        with self.client as c:
            resp = c.get("/")

            self.assertIn("Sign Up", str(resp.data))

    def test_logged_in_home_route(self):
        """It should render app for logged in user"""
        with self.client as c:
            with c.session_transaction() as sess:
                sess[CURR_USER_KEY] = self.user.id

            resp = c.get("/")

            self.assertIn("You need to enable JavaScript to run this app.", str(resp.data))

    def test_get_signup_page(self):
        """It should show signup page"""
        with self.client as c:
            resp = c.get("/signup")

            self.assertIn("Create Account", str(resp.data))

    def test_user_signup_and_redirect(self):
        """It should signup user and redirect to app"""
        with self.client as c:
            userdata = {
              "username": "wtform_tester",
              "password": "password",
              "confirm": "password"
            }

            resp = c.post("/signup", data=userdata, follow_redirects=True)

            self.assertEqual(resp.status_code, 200)
            self.assertIn("You need to enable JavaScript to run this app.", str(resp.data))

    def test_get_login_page(self):
        """It should show login page"""
        with self.client as c:
            resp = c.get("/login")

            self.assertIn("Login", str(resp.data))

    def test_user_login_and_redirect(self):
        """It should login user and redirect to app"""
        with self.client as c:
            good_userdata = {
              "username": "testing",
              "password": "password",
            }
            bad_userdata = {
              "username": "nonexistent",
              "password": "password",
            }

            resp = c.post("/login", data=good_userdata, follow_redirects=True)

            self.assertEqual(resp.status_code, 200)
            self.assertIn("You need to enable JavaScript to run this app.", str(resp.data))

            resp = c.post("/login", data=bad_userdata, follow_redirects=True)

            self.assertIn("Login Failed.", str(resp.data))

    def test_user_logout(self):
        """It should logout user"""
        with self.client as c:
            with c.session_transaction() as sess:
                  sess[CURR_USER_KEY] = self.user.id
                  sess[CURR_USER_NAME] = self.user.username
            
            resp = c.get("/logout", follow_redirects=True)

            self.assertIn("Log In", str(resp.data))