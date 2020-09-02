## SongStash App Proposal

### Problem Statement
Musicians learn, create, and perform lots of songs, and there’s not a central place to keep track of them all - which ones you know, which ones you’re learning, or the lyrics you have written down in a journal versus bookmarked on your phone.

### Goal
SongStash is a web app that allows a user to add the lyrics of a song to different song collections and create their own songs to add. Users would be able to notate song lyrics to include chord prompts. 

### Users
SongStash is primarily for musicians

### API/Data
SongStash will leverage the [MusixMatch API](https://developer.musixmatch.com/documentation/api-methods) for song and lyrics searching.

Potential Issues:

* Free plan only offers access to 30% of song lyrics.

### Database Schema
![DB schema design](https://github.com/HeyImMatt/SongStash/blob/master/SongStash-db-schema-v1.jpg?raw=true)

### Sensitive Information

* Email addresses
* Passwords
* Personal song lyrics

### Minimum Viable Product Feature Set

* Users can create an account
* Users can create song stashes
* Users can search MusixMatch for portions of lyrics, song titles, artists, or albums
* Users can add songs found in MusixMatch search to song stashes
* Users can create their own songs to add to song stashes
* Users can add blur or blocks to cover sections of lyrics they are trying to memorize

### Beyond CRUD Feature(s)

* The ability to add blur or blocks to cover lyrics

### Stretch Goals

* Users being able to notate lyrics with chord progressions
* Display guitar chord formations
* Autoscroll if the lyrics run off the page
* Zoom or enlarge text
* Integration with a MIDI api like [warp](https://warpseq.com/api.html) as well as adding more song features like tempo and structure so the browser can play back a simplified version of the song