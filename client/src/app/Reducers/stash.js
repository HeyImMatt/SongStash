import { 
  SET_STASHES,
  SET_NEW_STASH, 
} from '../Actions/types';

const INITIAL_STATE = {}

export default function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    
    case SET_STASHES:
      return {
        ...state,
        ...action.data
      }

    case SET_NEW_STASH:
      return {
        ...state,
        stashes: [...state.stashes, action.data]
        };

    default:
      return state;
  }
}