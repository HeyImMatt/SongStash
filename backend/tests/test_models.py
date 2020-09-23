"""Model Tests"""

import os
from unittest import TestCase
from sqlalchemy import exc

from models import db, Annotation, Song, SongAnnotation, Stash, StashSong, User, UserSong, UserStash

os.environ['SQLALCHEMY_DATABASE_URI'] = os.environ['SQLALCHEMY_TEST_DATABASE_URI']

from app import app

db.create_all()

class ModelTestCases(TestCase):
    """Test models"""

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

    def test_models(self):
        """Do the basic models work?"""

        # It should have a user with a song and a stash
        self.assertEqual(len(self.user.stashes), 1)
        self.assertEqual(self.user.stashes[0].name, "test stash name")
        self.assertEqual(len(self.user.songs), 1)
        self.assertEqual(self.user.songs[0].title, "test title")

        # It should have a stash with a song
        self.assertEqual(len(self.stash.songs), 1)

        # It should have a song with an annotation
        self.assertEqual(len(self.song.annotations), 1)
        self.assertEqual(self.song.annotations[0].annotation, "test annotation")