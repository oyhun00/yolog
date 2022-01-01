import { combineReducers } from 'redux';
import test, { counterSaga } from './test';
import post from './post';
import util from './util';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
  test,
  post,
  util
});

export function* rootSaga() {
  yield all([counterSaga()]);
}

export default rootReducer;