import axios from 'axios';
import { SET_CURRENT_SONG } from './types';

const API_URL = process.env.SONG_STASH_API_URL || 'http://127.0.0.1:5000/api';

export function postNewSong(song, userId) {
  return async function(dispatch) {
    const resp = await axios.post(`${API_URL}/songs`, {...song, user_id: userId});
    return dispatch(setCurrentSong(resp.data));
  }
}

export function getLyrics(song) {
  return async function(dispatch) {
    const resp = await axios.get(`${API_URL}/lyrics/${song.mmId}`);
    return dispatch(setCurrentSong({...song, lyrics: resp.data.replace(/\n/g, '<br />')}));
  }
}

export function setCurrentSong(data) {
  return {
    type: SET_CURRENT_SONG,
    data,
  }
}