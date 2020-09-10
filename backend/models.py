from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt

bcrypt = Bcrypt()
db = SQLAlchemy()

def connect_db(app):
    """Init and connect to database"""

    db.app = app
    db.init_app(app)

class Annotation(db.Model):
    """User-added song annotations"""

    __tablename__ = 'annotations'

    id = db.Column(db.Integer, primary_key=True)
    annotation = db.Column(db.Text, nullable=False)
    lyric_index = db.Column(db.Integer, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id', ondelete='cascade'))
    song_id = db.Column(db.Integer, db.ForeignKey('songs.id', ondelete='cascade'))

    @classmethod
    def create_annotation(cls, annotation, lyric_index, user_id, song_id):
        annotation = Annotation(annotation=annotation, lyric_index=lyric_index, user_id=user_id, song_id=song_id)
        db.session.add(annotation)

        return annotation

    def serialize(self):
        """Serializes anntation for json return"""
        return {
            "id": self.id,
            "annotation": self.annotation,
            "lyric_index": self.lyric_index,
            "user_id": self.user_id,
            "song_id": self.song_id,
        }

class Song(db.Model):
    """Song Model"""

    __tablename__ = 'songs'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.Text, nullable=False)
    artist = db.Column(db.Text, nullable=False)
    lyrics = db.Column(db.Text, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id', ondelete='cascade'))

    annotations = db.relationship('Annotation', secondary='songs_annotations')

    @classmethod
    def create_song(cls, title, artist, lyrics, user_id):
        """Create song in db"""
        song = Song(title=title, artist=artist, lyrics=lyrics, user_id=user_id)
        db.session.add(song)

        return song

    def serialize(self):
        """Serializes song for json return"""
        return {
            "id": self.id,
            "title": self.title,
            "artist": self.artist,
            "lyrics": self.lyrics,
            "user_id": self.user_id,
        }

class Stash(db.Model):
    """Stash Model"""

    __tablename__ = 'stashes'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id', ondelete='cascade'))

    songs = db.relationship('Song', secondary='stashes_songs')

    @classmethod
    def create_stash(cls, name, user_id):
        stash = Stash(name=name, user_id=user_id)
        db.session.add(stash)

        return stash

    def serialize(self):
        """Serializes stash for json return"""
        return {
            "id": self.id,
            "name": self.name,
            "user_id": self.user_id,
        }

class User(db.Model):
    """System User"""

    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), nullable=False, unique=True)
    password = db.Column(db.Text, nullable=False)

    songs = db.relationship('Song', secondary='users_songs')
    stashes = db.relationship('Stash', secondary='users_stashes')

    @classmethod
    def signup(cls, username, password):
        """Signup a new user"""

        hashed_pwd = bcrypt.generate_password_hash(password).decode('UTF-8')
        user = User(username=username, password=hashed_pwd)
        db.session.add(user)

        return user
    
    @classmethod
    def authenticate(cls, username, password):
        """Authenticate User"""

        user = cls.query.filter_by(username=username.lower()).first()

        if user:
            is_auth = bcrypt.check_password_hash(user.password, password)
            if is_auth:
                return user

        return False


######################
# Association Tables #
######################

class SongAnnotation(db.Model):
    """Mapping of annotations to a songs"""

    __tablename__ = 'songs_annotations'

    id = db.Column(db.Integer, primary_key=True)
    annotation_id = db.Column(db.Integer, db.ForeignKey('annotations.id', ondelete='cascade'))
    song_id = db.Column(db.Integer, db.ForeignKey('songs.id', ondelete='cascade'))

    @classmethod
    def create_song_annotation(cls, annotation_id, song_id):
        song_annotation = SongAnnotation(annotation_id=annotation_id, song_id=song_id)
        db.session.add(song_annotation)
        db.session.commit()
        return song_annotation

class StashSong(db.Model):
    """Mapping of a songs to stashes"""

    __tablename__ = 'stashes_songs'

    id = db.Column(db.Integer, primary_key=True)
    song_id = db.Column(db.Integer, db.ForeignKey('songs.id', ondelete='cascade'))
    stash_id = db.Column(db.Integer, db.ForeignKey('stashes.id', ondelete='cascade'))

    @classmethod
    def create_stash_song(cls, song_id, stash_id):
        stash_song = StashSong(song_id=song_id, stash_id=stash_id)
        db.session.add(stash_song)
        return stash_song

class UserStash(db.Model):
    """Mapping of stashes to users"""

    __tablename__ = 'users_stashes'

    id = db.Column(db.Integer, primary_key=True)
    stash_id = db.Column(db.Integer, db.ForeignKey('stashes.id', ondelete='cascade'))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id', ondelete='cascade'))

    @classmethod
    def create_user_stash(cls, stash_id, user_id):
        user_stash = UserStash(stash_id=stash_id, user_id=user_id)
        db.session.add(user_stash)
        db.session.commit()
        return user_stash

class UserSong(db.Model):
    """Mapping of a songs to users"""

    __tablename__ = 'users_songs'

    id = db.Column(db.Integer, primary_key=True)
    song_id = db.Column(db.Integer, db.ForeignKey('songs.id', ondelete='cascade'))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id', ondelete='cascade'))

    @classmethod
    def create_user_song(cls, song_id, user_id):
        user_song = UserSong(song_id=song_id, user_id=user_id)
        db.session.add(user_song)
        db.session.commit()
        return user_song
