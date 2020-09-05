from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt

bcrypt = Bcrypt()
db = SQLAlchemy()

db.create_all()

def connect_db(app):
    """Connect to database"""

    db.app = app
    db.init_app(app)

class Users(db.model):
    """System User"""

    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.Text(20), nullable=False, unique=True)
    password = db.Columns(db.Text, nullable=False)

    @classmethod
    def signup(cls, username, password):
        """Signup a new user"""

        hashed_pwd = bcrypt.generate_password_hash(password).decode('UTF-8')

        user = User(username=username, password=hashed_pwd)

        db.session.add(user)
        return user