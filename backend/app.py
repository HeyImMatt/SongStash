from flask import Flask, request, redirect, flash, render_template, session, g, jsonify
from flask_cors import CORS
from sqlalchemy.exc import IntegrityError
from models import db, connect_db, Annotation, Song, Stash, StashSong, User, SongAnnotation, UserSong
from forms import UserSignupForm, UserLoginForm
from env_vars import SQLALCHEMY_DATABASE_URI, SECRET_KEY

CURR_USER_KEY = "curr_user"

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = SQLALCHEMY_DATABASE_URI
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = SECRET_KEY

connect_db(app)

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

def do_logout():
    """Logout user."""

    if CURR_USER_KEY in session:
        del session[CURR_USER_KEY]

###########################################
# Login & Signup plus UI Handled by Flask #
###########################################

@app.route('/')
def home_route():
    form = UserLoginForm()
    return render_template('index.html', form=form)

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
            return render_template('signup.html', form=form)

    return render_template('signup.html', form=form)

@app.route('/login', methods=['POST'])
def user_login():
    """Handles User Login"""

    form = UserLoginForm()

    if form.validate_on_submit():
        user = User.authenticate(form.username.data, form.password.data)

        if user:
            do_login(user)
            return 'Login Success!'
        
        return 'Login Failed.'

@app.route('/logout')
def logout():
    """Handle logout of user."""

    do_logout()

    # flash("You have successfully logged out.", 'success')
    return redirect("/")

##############
# API Routes #
##############

### User Routes ###

@app.route('/api/users/<int:user_id>', methods=['GET'])
def get_user_songs_stashes_info(user_id):
    """Main GET route to return user's stashes and songs"""

    if g.user and g.user.id == user_id:
        user = User.query.get_or_404(user_id)

        data = {
          "id": user.id,
          "songs": user.songs,
          "stashes": user.stashes
        }
        return jsonify(data), 200
    
    return jsonify({"message":"Unauthorized"}), 401

### Stash Routes ###    

@app.route('/api/stashes', methods=['POST'])
def add_stash():
    """Creates a stash"""

    #Add g.user check when testing complete

    name = request.json['name']
    user_id = int(request.json['user_id'])
    
    stash = Stash.create_stash(name, user_id)

    try: 
        db.session.commit()
        return jsonify({"stash_id": stash.id}, 201)
    
    except:
        return jsonify({"message":"Error adding stash"}, 400)
    
    return 400

### Song Routes ###

@app.route('/api/songs', methods=['POST'])
def add_song():
    """Creates a song"""

    #Add g.user check when testing complete

    title = request.json['title']
    artist = request.json['artist']
    lyrics = request.json['lyrics']
    user_id = int(request.json['user_id'])
    
    song = Song.create_song(title, artist, lyrics, user_id)

    try: 
        db.session.commit()
        return jsonify({"song_id": song.id}, 201)
    
    except:
        return jsonify({"message":"Error adding song"}, 400)
    
    return 400