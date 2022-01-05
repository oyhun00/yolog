import { combineReducers } from 'redux';
import test from './test';
import post from './post';
import util from './util';

const rootReducer = combineReducers({
  test,
  post,
  util
});

export default rootReducer;