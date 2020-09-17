import axios from 'axios';
import SongStashApi from '../../SongStashApi';
import { SET_STASHES, SET_NEW_STASH } from './types';

const API_URL = process.env.SONG_STASH_API_URL || 'http://127.0.0.1:5000/api';

export function fetchUserStashes() {
  return async function (dispatch) {
    const resp = await axios.get(`${API_URL}/stashes`);
    return dispatch(setStashes(resp.data));
  }
}

export function postNewStash(name) {
  return async function(dispatch) {
    const resp = await axios.post(`${API_URL}/stashes`, {name});
    return dispatch(setNewStash(resp.data));
  }
}

export function postSongToStash(stashIds, songId) {
  stashIds.forEach(async (stashId) => {
    await SongStashApi.addSongToStash(songId, stashId);
  });
};

export function deleteSongFromUserStash(stashIds, songId) {
  stashIds.forEach(async (stashId) => {
    await SongStashApi.deleteSongFromStash(songId, stashId);
  });
}

export function setStashes(data) {
  return {
    type: SET_STASHES,
    data,
  }
}

export function setNewStash(data) {
  return {
    type: SET_NEW_STASH,
    data,
  }
}
