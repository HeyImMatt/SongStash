from flask import Flask, request, redirect, render_template, jsonify
from models import db, connect_db
from env_vars import DATABASE_URI

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE_URI
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True

connect_db(app)