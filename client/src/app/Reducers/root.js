import search from './search';
import song from './song';
import user from './user';
import { combineReducers } from 'redux';

export default combineReducers({
  search,
  song,
  user,
});