import { 
  FETCH_USER_SONGS,
  SET_CURRENT_SONG,
  CLEAR_CURRENT_SONG, 
  DELETE_SONG,
} from '../Actions/types';

const INITIAL_STATE = {}

export default function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {

    case FETCH_USER_SONGS:
      return {
        ...state,
        songs: [...action.data]
      }
    
    case SET_CURRENT_SONG:
      const song = action.data;
      return {
        ...state,
        id: song.id ? song.id : null,
        title: song.title,
        artist: song.artist,
        lyrics: song.lyrics,
        lyricsLocation: song.lyricsLocation ? song.lyricsLocation : null,
      }
    
    case CLEAR_CURRENT_SONG:
      return {
        ...state,
        id: '',
        title: '',
        artist: '',
        lyrics: '',
        lyricsLocation: ''
      };

    case DELETE_SONG:
      return INITIAL_STATE;

    default:
      return state;
  }
}