from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_login import LoginManager, UserMixin

bcrypt = Bcrypt()
db = SQLAlchemy()
login = LoginManager()

def connect_db(app):
    """Connect to database"""

    db.app = app
    db.init_app(app)

def connect_login(app):
    """Connect app to Flask login"""
    
    login.app = app
    login.init_app(app)


class Annotation(db.Model):
    """User-added song annotations"""

    __tablename__ = 'annotations'

    id = db.Column(db.Integer, primary_key=True)
    annotation = db.Column(db.Text, nullable=False)
    lyric_index = db.Column(db.Integer, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id', ondelete='cascade'))
    song_id = db.Column(db.Integer, db.ForeignKey('songs.id', ondelete='cascade'))

class Song(db.Model):
    """Song Model"""

    __tablename__ = 'songs'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.Text, nullable=False)
    artist = db.Column(db.Text, nullable=False)
    lyrics = db.Column(db.Text, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id', ondelete='cascade'))

    annotations = db.relationship('Annotation', secondary='songs_annotations')

class Stash(db.Model):
    """Stash Model"""

    __tablename__ = 'stashes'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id', ondelete='cascade'))

    songs = db.relationship('Song', secondary='stashes_songs')

class User(UserMixin, db.Model):
    """System User"""

    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), nullable=False, unique=True)
    password = db.Column(db.Text, nullable=False)

    songs = db.relationship('Song', secondary='users_songs')
    stashes = db.relationship('Stash', secondary='users_stashes')

    @login.user_loader
    def load_user(id):
        return User.query.get(int(id))

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
    song_id = db.Column(db.Integer, db.ForeignKey('songs.id', ondelete='cascade'))
    annotation_id = db.Column(db.Integer, db.ForeignKey('annotations.id', ondelete='cascade'))

class StashSong(db.Model):
    """Mapping of a songs to stashes"""

    __tablename__ = 'stashes_songs'

    id = db.Column(db.Integer, primary_key=True)
    song_id = db.Column(db.Integer, db.ForeignKey('songs.id', ondelete='cascade'))
    stash_id = db.Column(db.Integer, db.ForeignKey('stashes.id', ondelete='cascade'))

class UserStash(db.Model):
    """Mapping of stashes to users"""

    __tablename__ = 'users_stashes'

    id = db.Column(db.Integer, primary_key=True)
    stash_id = db.Column(db.Integer, db.ForeignKey('stashes.id', ondelete='cascade'))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id', ondelete='cascade'))

class UserSong(db.Model):
    """Mapping of a songs to users"""

    __tablename__ = 'users_songs'

    id = db.Column(db.Integer, primary_key=True)
    song_id = db.Column(db.Integer, db.ForeignKey('songs.id', ondelete='cascade'))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id', ondelete='cascade'))
