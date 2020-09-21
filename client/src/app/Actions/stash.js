import SongStashApi from '../../SongStashApi';
import { SET_STASHES, SET_NEW_STASH } from './types';

export function fetchUserStashes() {
  return async function (dispatch) {
    const data = await SongStashApi.fetchStashes();
    return dispatch(setStashes(data));
  }
}

export function postNewStash(name) {
  return async function(dispatch) {
    const data = await SongStashApi.postStash(name);
    return dispatch(setNewStash(data));
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
