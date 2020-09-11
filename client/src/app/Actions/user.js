import axios from 'axios';
import { FETCH_USER_DATA } from './types';

const API_URL = process.env.SONG_STASH_API_URL || 'http://127.0.0.1:5000/api';

export function getUserDataFromApi(id) {
  return async function(dispatch) {
    const resp = await axios.get(`${API_URL}/users/${id}`);
    console.log(resp.data)
    return dispatch(getUserData(resp.data));
  }
}

function getUserData(data) {
  return {
    type: FETCH_USER_DATA,
    data,
  };
};