from flask import Flask, request, redirect, render_template, jsonify
# from flask_login import LoginManager
from models import db, connect_db, Annotation, Song, Stash, StashSong, User, SongAnnotation, UserSong
from env_vars import SQLALCHEMY_DATABASE_URI, SECRET_KEY

app = Flask(__name__)
# login = LoginManager(app)

app.config['SQLALCHEMY_DATABASE_URI'] = SQLALCHEMY_DATABASE_URI
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = SECRET_KEY

connect_db(app)
# db.drop_all()
# db.create_all()

@app.route('/')
def home_route():
    return render_template('index.html')