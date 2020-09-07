from flask import Flask, request, redirect, flash, render_template, session, g, jsonify
from sqlalchemy.exc import IntegrityError
from flask_login import current_user, login_user
from models import db, connect_db, connect_login, Annotation, Song, Stash, StashSong, User, SongAnnotation, UserSong
from forms import UserSignupForm, UserLoginForm
from env_vars import SQLALCHEMY_DATABASE_URI, SECRET_KEY

CURR_USER_KEY = "curr_user"

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = SQLALCHEMY_DATABASE_URI
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = SECRET_KEY

connect_db(app)
connect_login(app)

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
            return 'Account Created'

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

@app.route('/api/users/<int:user_id>', methods=['GET'])
def get_user_songs_stashes_info(user_id):
    """Main GET route to return user's stashes and songs"""

    if g.user.id == user_id:
        user = User.query.get_or_404(user_id)

        data = {
          "id": user.id,
          "songs": user.songs
        }
        return jsonify(data), 200
    
    return jsonify({"message":"Unauthorized"}), 401