import axios from 'axios';
import { SET_CURRENT_SONG } from './types';

const API_URL = process.env.SONG_STASH_API_URL || 'http://127.0.0.1:5000/api';

export function postNewSong(song, userId) {
  return async function(dispatch) {
    const resp = await axios.post(`${API_URL}/songs`, {...song, user_id: userId});
    const lyrics = resp.data.lyrics.replace(/\n/g, '<br />');
    return dispatch(setCurrentSong({...resp.data, lyrics}));
  }
}

export function getLyrics(song) {
  return async function(dispatch) {
    const resp = await axios.get(`${API_URL}/lyrics/${song.mmId}`);
    const lyrics = resp.data.replace(/\n/g, '<br />');
    return dispatch(setCurrentSong({...song, lyrics}));
  }
}

export function setCurrentSong(data) {
  return {
    type: SET_CURRENT_SONG,
    data,
  }
}