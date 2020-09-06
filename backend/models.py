from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt

bcrypt = Bcrypt()
db = SQLAlchemy()

class Annotation(db.Model):
    """User-added song annotations"""

    __tablename__ = 'annotations'

    id = db.Column(db.Integer, primary_key=True)
    annotation = db.Column(db.Text, nullable=False)
    lyric_index = db.Column(db.Integer, nullable=False)
    db.ForeignKey('users.id')
    db.ForeignKey('songs.id')

class Song(db.Model):
    """Song Model"""

    __tablename__ = 'songs'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.Text, nullable=False)
    artist = db.Column(db.Text, nullable=False)
    lyrics = db.Column(db.Text, nullable=False)
    db.ForeignKey('users.id')

class Stash(db.Model):
    """Stash Model"""

    __tablename__ = 'stashes'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text, nullable=False)
    db.ForeignKey('users.id')

class User(db.Model):
    """System User"""

    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), nullable=False, unique=True)
    password = db.Column(db.Text, nullable=False)

    @classmethod
    def signup(cls, username, password):
        """Signup a new user"""

        hashed_pwd = bcrypt.generate_password_hash(password).decode('UTF-8')

        user = User(username=username, password=hashed_pwd)

        db.session.add(user)
        return user

def connect_db(app):
    """Connect to database"""

    db.app = app
    db.init_app(app)