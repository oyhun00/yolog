import { all, fork } from 'redux-saga/effects';
import postSaga from '@Store/sagas/postSaga';

export default function* rootSaga() {
  yield all([fork(postSaga)]);
}
