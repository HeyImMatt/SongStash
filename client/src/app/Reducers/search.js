import { 
  SET_SEARCH_RESULTS,
  CLEAR_SEARCH_RESULTS
} from '../Actions/types';

const INITIAL_STATE = {}

export default function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    
    case SET_SEARCH_RESULTS:
      const results = action.data;
      return {
        ...state,
        results
      }
    
    case CLEAR_SEARCH_RESULTS:
      return INITIAL_STATE;

    default:
      return state;
  }
}