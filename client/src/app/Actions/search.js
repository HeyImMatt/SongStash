import { SET_SEARCH_RESULTS } from './types';
import SongStashApi from '../../SongStashApi';

export function searchSongsApi(query) {
  return async function(dispatch) {
    const data = await SongStashApi.searchSongs(query);
    return dispatch(setSearchResults(data));
  }
}

export function setSearchResults(data) {
  return {
    type: SET_SEARCH_RESULTS,
    data,
  };
};