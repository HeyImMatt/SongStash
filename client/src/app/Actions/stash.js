import axios from 'axios';
import { SET_STASHES } from './types';

const API_URL = process.env.SONG_STASH_API_URL || 'http://127.0.0.1:5000/api';

export function postNewStash(name, userId) {
  return async function(dispatch) {
    const resp = await axios.post(`${API_URL}/stashes`, {name, user_id: userId});
    const newStash = {
      id: resp.data.id,
      name: resp.data.name,
      songs: resp.data.song_ids
    }
    return dispatch(setStashes(newStash));
  }
}

export function setStashes(data) {
  return {
    type: SET_STASHES,
    data,
  }
}