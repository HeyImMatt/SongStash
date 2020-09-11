import { 
  CREATE_NEW_SONG,
  CLEAR_CURRENT_SONG,
} from '../Actions/types';

const INITIAL_STATE = {}

export default function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {

    case CREATE_NEW_SONG:
      const song = action.data;
      return {
        ...state,
        id: song.id,
        title: song.title,
        artist: song.artist,
        lyrics: song.lyrics,
      };
    
    case CLEAR_CURRENT_SONG:
      return INITIAL_STATE;

    default:
      return state;
  }
}