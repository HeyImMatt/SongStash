from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField
from wtforms.validators import DataRequired, Length, Regexp, EqualTo

class UserSignupForm(FlaskForm):
    """Form for signing up users"""

    username = StringField('Username', 
                validators=[
                  DataRequired(), 
                  Length(min=3, max=20, message='Username must be at 3-20 characters long'),
                  Regexp('^\w+$', message='Username can only be alphanumeric characters')
                  ])
    password = PasswordField('Password', 
                validators=[
                  Length(min=6, message='Password must be at least 6 characters'),
                  EqualTo('confirm', message='Passwords must match')
                  ])
    confirm = PasswordField('Confirm Password')
