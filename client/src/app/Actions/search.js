import axios from 'axios';
import { SET_SEARCH_RESULTS } from './types';

const API_URL = process.env.SONG_STASH_API_URL || 'http://127.0.0.1:5000/api';

export function searchSongsApi(query) {
  console.log(encodeURI(query))
  return async function(dispatch) {
    const resp = await axios.get(`${API_URL}/search/${encodeURI(query)}`);
    return dispatch(setSearchResults(resp.data));
  }
}

export function setSearchResults(data) {
  console.log(data)
  return {
    type: SET_SEARCH_RESULTS,
    data,
  };
};