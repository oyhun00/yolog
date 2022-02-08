import { all, fork } from 'redux-saga/effects';
import postSaga from 'store/sagas/postSaga';

export default function* rootSaga() {
  yield all([fork(postSaga)]);
}
