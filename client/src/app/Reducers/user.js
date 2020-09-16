import { 
  FETCH_USER_DATA,
} from '../Actions/types';

const INITIAL_STATE = {
  id: parseInt(window.token),
  songs: [],
  stashes: [],
}

function htmlify(songs) {
  return songs.map( song => ({
    ...song,
    lyrics: song.lyrics.replace(/\n/g, '<br />')
  }));
}

export default function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_USER_DATA:
      const songs = htmlify(action.data.songs);
      return {
        ...state,
        songs: [...songs],
        stashes: [...action.data.stashes]
      };
    default:
      return state;
  }
}