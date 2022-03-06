import axios from 'axios';
import {
  all, fork, put, call, takeLatest,
} from 'redux-saga/effects';
import { push } from 'connected-next-router';
import {
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
} from '@Constants/actionTypes';

const loginApi = async (data) => axios.post('/api/login', { params: data });

function* login(action) {
  try {
    const { data } = yield call(loginApi, { data: action.payload });

    if (data.success) {
      yield axios.defaults.headers.common.Authorization = `Bearer ${data.token}`;
      yield put({ type: LOGIN_SUCCESS, result: data.result });
      yield put(push({ pathname: '/' }));
    }
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
