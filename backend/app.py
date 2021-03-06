from flask import Flask, request, redirect, flash, render_template, session, g, jsonify, make_response
from flask_cors import CORS
from sqlalchemy.exc import IntegrityError
from dotenv import load_dotenv
from models import db, connect_db, Annotation, Song, Stash, StashSong, User, SongAnnotation, UserSong, UserStash
from forms import UserSignupForm, UserLoginForm
from external_api_handler import search_api, get_song_lyrics
import os

app = Flask(__name__)
CORS(app, resources=r'/api/*')

load_dotenv()

app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('SQLALCHEMY_DATABASE_URI')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')

connect_db(app)

CURR_USER_KEY = 'curr_user_id'
CURR_USER_NAME = 'curr_user_name'

# Remove before deploying
# db.drop_all()
# db.create_all()

@app.before_request
def add_user_to_g():
    """If we're logged in, add curr user to Flask global."""

    if CURR_USER_KEY in session:
        g.user = User.query.get(session[CURR_USER_KEY])

    else:
        g.user = None


def do_login(user):
    """Log in user."""

    session[CURR_USER_KEY] = user.id
    session[CURR_USER_NAME] = user.username

def do_logout():
    """Logout user."""

    if CURR_USER_KEY in session:
        del session[CURR_USER_KEY]
        del session[CURR_USER_NAME]

###########################################
# Login & Signup plus UI Handled by Flask #
###########################################

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def home_route(path):
    if g.user:
        return render_template('app.html', username=session[CURR_USER_NAME])

    return render_template('index.html')

@app.route('/signup', methods=['GET', 'POST'])
def user_signup():
    """Handles User Signup"""

    form = UserSignupForm()

    if form.validate_on_submit():
        try:
            user = User.signup(
                username=form.username.data.lower(),
                password=form.password.data
            )
            db.session.commit()
            do_login(user)
            return redirect('/')
        except IntegrityError as e:
            flash("Username already taken", 'danger')
            return render_template('form.html', form=form)

    return render_template('form.html', form=form)

@app.route('/login', methods=['GET', 'POST'])
def user_login():
    """Handles User Login"""

    form = UserLoginForm()

    if form.validate_on_submit():
        user = User.authenticate(form.username.data, form.password.data)

        if user:
            do_login(user)
            return redirect('/')
        
        return 'Login Failed.'

    return render_template('form.html', form=form, login=True)

@app.route('/logout')
def logout():
    """Handle logout of user."""

    do_logout()

    # flash("You have successfully logged out.", 'success')
    return redirect("/")

##############
# API Routes #
##############

### Stash Routes ###

@app.route('/api/stashes', methods=['GET'])
def get_stashes():
    """Get all user stashes"""

    if g.user:
        user_id = int(g.user.id)
        user = User.query.get_or_404(user_id)
        stashes = [s.serialize() for s in user.stashes]

        data = {
            "stashes": stashes
        }
        
        return make_response(jsonify(data), 200)

    return make_response(jsonify({"message":"Unauthorized"}), 401)

@app.route('/api/stashes', methods=['POST'])
def add_stash():
    """Creates a stash and UserStash association"""

    if g.user:
        name = request.json['name']
        user_id = int(g.user.id)
        
        stash = Stash.create_stash(name, user_id)

        try: 
            db.session.commit()
            user_stash = UserStash.create_user_stash(stash.id, user_id)
            data = stash.serialize()
            return make_response(jsonify(data), 201)
        except:
            return make_response(jsonify({"message":"Error adding stash"}), 400)

    return make_response(jsonify({"message":"Unauthorized"}), 401)

@app.route('/api/stashes/<int:id>', methods=['PATCH'])
def edit_stash(id):
    """Edit Stash"""

    if g.user:
        user_id = int(g.user.id)
        stash = Stash.query.get_or_404(id)

        if stash.user_id == user_id:
            name = request.json['name']
            stash.name = name if name else stash.name

            try: 
                db.session.commit()
                return make_response(jsonify({"stash_id": stash.id}), 200)
            except:
                return make_response(jsonify({"message":"Error editing stash"}), 400)

    return make_response(jsonify({"message":"Unauthorized"}), 401)

@app.route('/api/stashes/<int:id>', methods=['DELETE'])
def delete_stash(id):
    """Delete stash route"""

    if g.user:
        user_id = int(g.user.id)
        stash = Stash.query.get_or_404(id)

        if stash.user_id == user_id:
            db.session.delete(stash)

            try:
                db.session.commit()
                return make_response(jsonify({"message":"Stash deleted"}), 200)
            except:
                return make_response(jsonify({"message":"Error deleting stash"}), 400)

    return make_response(jsonify({"message":"Unauthorized"}), 401)

@app.route('/api/stashes/songs', methods=['POST'])
def add_song_to_stash():
    """Adds a song to a stash"""

    if g.user:
        song_id = int(request.json['songId'])
        stash_id = int(request.json['stashId'])
        user_id = int(g.user.id)

        song = Song.query.get_or_404(song_id)
        stash = Stash.query.get_or_404(stash_id)

        if song.user_id == user_id and stash.user_id == user_id:
            stash_song = StashSong.create_stash_song(song_id, stash_id)

            try: 
                db.session.commit()
                return make_response(jsonify({"stash_song_id": stash_song.id}), 201)
            except:
                return make_response(jsonify({"message":"Error adding song to stash"}), 400)

    return make_response(jsonify({"message":"Unauthorized"}), 401)

@app.route('/api/stashes/songs/<int:stash_id>/<int:song_id>', methods=['DELETE'])
def delete_song_from_stash(stash_id, song_id):
    """Delete song from stash"""

    if g.user:
        user_id = int(g.user.id)
        stash_song = StashSong.query.filter(StashSong.stash_id == stash_id, StashSong.song_id == song_id).first()
        stash = Stash.query.get_or_404(stash_song.stash_id)

        if stash.user_id == user_id:
            db.session.delete(stash_song)

            try:
                db.session.commit()
                return make_response(jsonify({"message":"Song deleted from stash"}), 200)
            except:
                return make_response(jsonify({"message":"Error deleting song from stash"}), 400)

    return make_response(jsonify({"message":"Unauthorized"}), 401)

### Song Routes ###

@app.route('/api/songs', methods=['GET'])
def get_songs():
    """Get all user songs"""

    if g.user:
        user_id = int(g.user.id)
        user = User.query.get_or_404(user_id)
        songs = [s.serialize() for s in user.songs]
        data = {
            "songs": songs,
        }
        
        return make_response(jsonify(data), 200)

    return make_response(jsonify({"message":"Unauthorized"}), 401)

@app.route('/api/songs', methods=['POST'])
def add_song():
    """Creates a song and UserSong association"""

    if g.user:
        user_id = int(g.user.id)
        title = request.json['title']
        artist = request.json['artist']
        lyrics = request.json['lyrics']
    
        song = Song.create_song(title, artist, lyrics, user_id)

        try: 
            db.session.commit()
            user_song = UserSong.create_user_song(song.id, user_id)
            data = song.serialize()
            return make_response(jsonify(data), 201)
        except:
            return make_response(jsonify({"message":"Error adding song"}), 400)

    return make_response(jsonify({"message":"Unauthorized"}), 401)

@app.route('/api/songs/<int:id>', methods=['PATCH'])
def edit_song(id):
    """Edit Song"""

    if g.user:
        user_id = int(g.user.id)
        song = Song.query.get_or_404(id)

        if user_id == song.user_id:
            title = request.json['title']
            artist = request.json['artist']
            lyrics = request.json['lyrics']
            
            song.title = title if title else song.title
            song.artist = artist if artist else song.artist
            song.lyrics = lyrics if lyrics else song.lyrics

            try: 
                db.session.commit()
                return make_response(jsonify({"song_id": song.id}), 200)
            except:
                return make_response(jsonify({"message":"Error editing song"}), 400)

    return make_response(jsonify({"message":"Unauthorized"}), 401)

@app.route('/api/songs/<int:id>', methods=['DELETE'])
def delete_song(id):
    """Delete song route"""

    if g.user:
        user_id = int(g.user.id)
        song = Song.query.get_or_404(id)

        if user_id == song.user_id:
            db.session.delete(song)
            try:
                db.session.commit()
                return make_response(jsonify({"message":"Song deleted"}), 200)
            except:
                return make_response(jsonify({"message":"Error deleting song"}), 400)

    return make_response(jsonify({"message":"Unauthorized"}), 401)

### Annotation Routes ###

@app.route('/api/annotations', methods=['POST'])
def add_annotation():
    """Creates an annotation"""

    if g.user:
        user_id = int(g.user.id)
        annotation = request.json['annotation']
        lyric_index = int(request.json['lyric_index'])
        song_id = int(request.json['song_id'])
        song = Song.query.get_or_404(song_id)

        if user_id == song.user_id:
            annotation = Annotation.create_annotation(annotation, lyric_index, user_id, song_id)

            try: 
                db.session.commit()
                song_annotation = SongAnnotation.create_song_annotation(annotation.id, song_id)
                return make_response(jsonify({"annotation_id": annotation.id}), 201)
            
            except:
                return make_response(jsonify({"message":"Error adding annotation"}), 400)

    return make_response(jsonify({"message":"Unauthorized"}), 401)

@app.route('/api/annotations/<int:id>', methods=['PATCH'])
def edit_annotation(id):
    """Edit Annotation"""

    if g.user:
        user_id = int(g.user.id)
        a = Annotation.query.get_or_404(id)
        annotation = request.json['annotation']
        lyric_index = int(request.json['lyric_index'])

        if user_id == a.user_id:
            a.annotation = annotation if annotation else a.annotation
            a.lyric_index = lyric_index if lyric_index else a.lyric_index

            try: 
                db.session.commit()
                return make_response(jsonify({"annotation_id": a.id}), 200)
            
            except:
                return make_response(jsonify({"message":"Error editing annotation"}), 400)

    return make_response(jsonify({"message":"Unauthorized"}), 401)

@app.route('/api/annotations/<int:id>', methods=['DELETE'])
def delete_annotation(id):
    """Delete annotation route"""

    if g.user:
        user_id = int(g.user.id)
        annotation = Annotation.query.get_or_404(id)

        if user_id == annotation.user_id:
            db.session.delete(annotation)

            try:
                db.session.commit()
                return make_response(jsonify({"message":"Annotation deleted"}), 200)
            except:
                return make_response(jsonify({"message":"Error deleting annotation"}), 400)

    return make_response(jsonify({"message":"Unauthorized"}), 401)

### Search Routes ###

@app.route('/api/search/<q_string>')
def search_for_song(q_string):
    """Search MusixMatch API to get songs"""

    if g.user:
        results = search_api(q_string)
        return make_response(jsonify(results), 200)

    return make_response(jsonify({"message":"Unauthorized"}), 401)

### Lyrics Routes ###

@app.route('/api/lyrics/<track_id>')
def return_lyrics(track_id):
    """Gets lyrics from MusixMatch API"""

    if g.user:
        lyrics = get_song_lyrics(track_id)
        return make_response(jsonify(lyrics), 200)

    return make_response(jsonify({"message":"Unauthorized"}), 401)
