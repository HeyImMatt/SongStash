# SongStash

![GitHub repo code size](https://img.shields.io/github/languages/code-size/heyimmatt/songstash)
![GitHub contributors](https://img.shields.io/github/contributors/heyimmatt/songstash)
![GitHub stars](https://img.shields.io/github/stars/heyimmatt/songstash?style=social)
![GitHub forks](https://img.shields.io/github/forks/heyimmatt/songstash?style=social)
[![Twitter Follow](https://img.shields.io/twitter/follow/heyimmatt?style=social)](https://twitter.com/heyimmatt)
[![LinkedIn](https://img.shields.io/badge/-LinkedIn-black.svg?style=plastic&logo=linkedin&colorB=2867B2)](https://www.linkedin.com/in/mattmcfarland/)

**Created by: Matt McFarland**

SongStash is a web app that will allow you to keep track of song lyrics. You can add your own songs or search the MusixMatch database for existing songs. You can create stashes like Current Set List or My Originals to categorize songs.

My Songs
![My Songs](https://github.com/HeyImMatt/SongStash/blob/master/misc/my-songs.png?raw=true)

Search Songs
![Search Songs](https://github.com/HeyImMatt/SongStash/blob/master/misc/search-songs.png?raw=true)

Song Detail
![Song Detail](https://github.com/HeyImMatt/SongStash/blob/master/misc/song-detail.png?raw=true)


## Technologies Used
Frontend
- JavaScript
- React
- Redux
- Reactstrap
- Bootstrap
- HTML
- CSS

Backend
- Python
- Flask
- SQLAlchemy

Testing
- Jest
- React Testing Library
- Python Unittest

Database
- PostgreSQL

## Prerequisites

Before you begin, ensure you have met the following requirements:
* You have an Internet browser (Chrome, Firefox, Safari, etc)
* You have a code editor (VS Code, Atom, etc)
* You have python3 and pip
* You have npm

## Installing SongStash

To install SongStash, follow these steps:

Via Downloading from GitHub:
1. Download this repository onto your machine by clicking the "Clone or Download" button
2. Download and extract the zip file to a directory of your choice.

Via command line:
```
$ git clone https://github.com/HeyImMatt/songstash.git
```

Frontend Client Environment Setup:
1. In the directory you've cloned or downloaded the repo to, cd into the `client` directory and install dependencies
```
$ npm install
```
2. Create a build
```
$ npm run build
```


Backend Environment Setup:
1. In the directory you've cloned or downloaded the repo to, cd into the `backend` directory and create the virtual environment and activate it

```
$ python3 -m venv venv
$ source venv/bin/activate
```

2. Install dependencies

```
(venv)$ pip3 install -r requirements.txt
```
3. [Install PostgreSQL](https://www.postgresql.org/download/) if you do not have it.

4. Create both dev and test databases in PostgreSQL.
```
$ createdb songstash_dev
$ createdb songstash_test
```
5. Head over to [MusixMatch](https://developer.musixmatch.com/signup) and sign up for a dev account to get an API key.

6. Create a .env file in the backend directory and add the following environment variables.

```
SQLALCHEMY_DATABASE_URI=postgresql:///songstash_dev
SQLALCHEMY_TEST_DATABASE_URI=postgresql:///songstash_test
SECRET_KEY=<generate a random string for Flask's secret key>
MUSIX_MATCH_API_KEY=<add your key here>
```
7. Start up the Flask server
```
(venv)$ flask run
```
8. Navigate your preferred browser (Chrome suggested) to http://127.0.0.1:5000/

## Developing
When working in the frontend client React code, you will need trigger a new build to see changes.
```
client$ npm run build
```

## Known Bugs and Limitations

- Menu does not collapse on mobile or smaller browser window sizes

## Support and Contact

If you want to contact me you can reach me at <mrmcfarland@gmail.com>

## License

This project uses the following license: [MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2020 Matt McFarland