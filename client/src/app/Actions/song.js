import axios from 'axios';
import { SET_CURRENT_SONG, DELETE_SONG, FETCH_USER_SONGS } from './types';

const API_URL = process.env.SONG_STASH_API_URL || 'http://127.0.0.1:5000/api';

export function fetchUserSongs() {
  return async function (dispatch) {
    const resp = await axios.get(`${API_URL}/songs`);
    const songs = htmlify(resp.data.songs);
    return dispatch(fetchedUserSongs(songs));
  }
}

export function postNewSong(song, userId) {
  return async function(dispatch) {
    const resp = await axios.post(`${API_URL}/songs`, {...song, user_id: userId});
    const lyrics = resp.data.lyrics.replace(/\n/g, '<br />');
    return dispatch(setCurrentSong({...resp.data, lyrics}));
  }
}

export function deleteSong(id) {
  return async function(dispatch) {
    const resp = await axios.delete(`${API_URL}/songs/${id}`)
    if (resp.status === "200") {
      return dispatch(deletedSong())
    }

  }
}

export function getLyrics(song) {
  return async function(dispatch) {
    const resp = await axios.get(`${API_URL}/lyrics/${song.mmId}`);
    const lyrics = resp.data.replace(/\n/g, '<br />');
    return dispatch(setCurrentSong({...song, lyrics}));
  }
}

function htmlify(songs) {
  return songs.map( song => ({
    ...song,
    lyrics: song.lyrics.replace(/\n/g, '<br />')
  }));
}

export function fetchedUserSongs(data) {
  return {
    type: FETCH_USER_SONGS,
    data
  }
}

export function setCurrentSong(data) {
  return {
    type: SET_CURRENT_SONG,
    data,
  }
}

export function deletedSong(){
  return {
    type: DELETE_SONG,
  }
}