import { 
  SET_STASHES, 
} from '../Actions/types';

const INITIAL_STATE = {}

export default function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    
    case SET_STASHES:
      const stash = action.data;
      return {
        ...state,
        [stash.id]: {
          name: stash.name,
          songs: [...stash.songs]
        }
      }

    default:
      return state;
  }
}