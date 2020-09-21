import { SET_CURRENT_SONG, DELETE_SONG, FETCH_USER_SONGS } from './types';
import SongStashApi from '../../SongStashApi';

export function fetchUserSongs() {
  return async function (dispatch) {
    const data = await SongStashApi.fetchSongs();
    const songs = htmlify(data);
    return dispatch(fetchedUserSongs(songs));
  }
}

export function postNewSong(song, userId) {
  return async function(dispatch) {
    const data = await SongStashApi.postSong(song, userId);
    const lyrics = data.lyrics.replace(/\n/g, '<br />');
    return dispatch(setCurrentSong({...data, lyrics}));
  }
}

export function deleteSong(id) {
  return async function(dispatch) {
    const resp = await SongStashApi.deleteSong(id);
    if (resp) {
      return dispatch(deletedSong())
    }
  }
}

export function getLyrics(song) {
  return async function(dispatch) {
    const data = await SongStashApi.getSongLyrics(song.mmId);
    const lyrics = data.replace(/\n/g, '<br />');
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