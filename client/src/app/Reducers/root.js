import search from './search';
import song from './song';
import stash from './stash';
import user from './user';
import { combineReducers } from 'redux';

export default combineReducers({
  search,
  song,
  stash,
  user,
});