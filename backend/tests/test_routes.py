import os
from unittest import TestCase
from sqlalchemy import exc
from dotenv import load_dotenv
from models import db, Annotation, Song, SongAnnotation, Stash, StashSong, User, UserSong, UserStash

load_dotenv()
os.environ['SQLALCHEMY_DATABASE_URI'] = os.getenv('SQLALCHEMY_TEST_DATABASE_URI')

from app import app, CURR_USER_KEY

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

    # Login & Signup Routes

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