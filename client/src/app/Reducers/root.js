import user from './user';
import song from './song';
import { combineReducers } from 'redux';

export default combineReducers({
  user,
  song,
});