import axios from 'axios';
import {
  all, fork, put, call, takeLatest,
} from 'redux-saga/effects';
import { push } from 'connected-next-router';
import {
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
} from '@Constants/actionTypes';

const loginApi = (data) => { axios.post('/api/login', { params: data }); };

function* login(action) {
  try {
    const result = yield call(loginApi, { data: action.payload });
    yield console.log('login #$#$#$#$#$#', result);
    yield put({ type: LOGIN_SUCCESS, result });
  } catch (err) {
    yield console.log('err ------', err);
    yield put({ type: LOGIN_FAILURE, result: err.response });
  }
}

function* watchLogin() {
  yield takeLatest(LOGIN_REQUEST, login);
}

export default function* authSaga() {
  yield all([
    fork(watchLogin),
  ]);
}
