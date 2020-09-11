import axios from 'axios';
import { CREATE_NEW_SONG } from './types';

const API_URL = process.env.SONG_STASH_API_URL || 'http://127.0.0.1:5000/api';

export function postNewSong(song, userId) {
  return async function(dispatch) {
    const resp = await axios.post(`${API_URL}/songs`, {...song, user_id: userId});
    return dispatch(createNewSong(resp.data));
  }
}

function createNewSong(data) {
  return {
    type: CREATE_NEW_SONG,
    data,
  };
};