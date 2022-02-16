import { all, fork } from 'redux-saga/effects';
import postSaga from '@Store/sagas/postSaga';
import utilSaga from '@Store/sagas/utilSaga';

export default function* rootSaga() {
  yield all([
    fork(postSaga),
    fork(utilSaga),
  ]);
}
