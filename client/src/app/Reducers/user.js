import { 
  FETCH_USER_DATA,
} from '../Actions/types';

const INITIAL_STATE = {
  id: window.token,
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
      console.log(action.data);
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