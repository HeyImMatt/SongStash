import { 
  FETCH_USER_DATA,
} from '../Actions/types';

const INITIAL_STATE = {
  id: window.token,
  songs: [],
  stashes: [],
}

export default function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_USER_DATA:
      return {
        ...state,
        songs: [...action.data.songs],
        stashes: [...action.data.stashes]
      };
    default:
      return state;
  }
}