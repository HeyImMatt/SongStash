"""Model Tests"""

import os
from unittest import TestCase
from sqlalchemy import exc
from dotenv import load_dotenv
from models import db, Annotation, Song, SongAnnotation, Stash, StashSong, User, UserSong, UserStash

load_dotenv()
os.environ['SQLALCHEMY_DATABASE_URI'] = os.getenv('SQLALCHEMY_TEST_DATABASE_URI')

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

    # Assocation Tests

    def test_user_associations(self):
        """It should have a user with a song and a stash"""
        self.assertEqual(len(self.user.stashes), 1)
        self.assertEqual(self.user.stashes[0].name, "test stash name")
        self.assertEqual(len(self.user.songs), 1)
        self.assertEqual(self.user.songs[0].title, "test title")

        # It should have a stash with a song
        self.assertEqual(len(self.stash.songs), 1)

        # It should have a song with an annotation
        self.assertEqual(len(self.song.annotations), 1)
        self.assertEqual(self.song.annotations[0].annotation, "test annotation")

    # Authentication Tests

    def test_valid_authentication(self):
        u = User.authenticate(self.user.username, "password")
        self.assertIsNotNone(u)
        self.assertEqual(u.id, self.uid)
    
    def test_invalid_username(self):
        self.assertFalse(User.authenticate("badusername", "password"))

    def test_wrong_password(self):
        self.assertFalse(User.authenticate(self.user.username, "badpassword"))

    # Serialization Tests

    def test_annotation_serialization(self):
        data = self.annotation.serialize()
        json = {
            "id": self.annotation.id,
            "annotation": self.annotation.annotation,
            "lyric_index": self.annotation.lyric_index,
            "user_id": self.annotation.user_id,
            "song_id": self.annotation.song_id,
        }
        self.assertEqual(data, json)

    def test_song_serialization(self):
        data = self.song.serialize()
        json = {
            "id": self.song.id,
            "title": self.song.title,
            "artist": self.song.artist,
            "lyrics": self.song.lyrics,
            "user_id": self.song.user_id,
        }
        self.assertEqual(data, json)

    def test_stash_serialization(self):
        data = self.stash.serialize()
        json = {
            "id": self.stash.id,
            "name": self.stash.name,
            "song_ids": [11111],
        }
        self.assertEqual(data, json)