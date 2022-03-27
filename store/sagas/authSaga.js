import axios from 'axios';
import {
  all, fork, put, call, takeLatest,
} from 'redux-saga/effects';
import { push } from 'connected-next-router';
import {
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
  REFRESH_TOKEN_REQUEST, REFRESH_TOKEN_SUCCESS, REFRESH_TOKEN_FAILURE,
} from '@Constants/actionTypes';

const loginApi = async (data) => axios.post('/api/auth/login', { params: data });
const silentRefreshApi = async () => axios.post('/api/auth');

function* login(action) {
  try {
    const { data } = yield call(loginApi, { data: action.payload });
    if (data.success) {
      yield axios.defaults.headers.common.Authorization = `Bearer ${data.accessToken}`;
      yield put({ type: LOGIN_SUCCESS, result: data.isLogin });
      yield put(push({ pathname: '/' }));
    } else {
      yield put({ type: LOGIN_FAILURE, result: data.message });
    }
  } catch (err) {
    yield put({ type: LOGIN_FAILURE, result: err.response });
  }
}

function* silentRefresh() {
  try {
    const { data } = yield call(silentRefreshApi);
    yield axios.defaults.headers.common.Authorization = `Bearer ${data.accessToken}`;
    yield put({ type: REFRESH_TOKEN_SUCCESS, result: data.isLogin });
  } catch (err) {
    yield put({ type: REFRESH_TOKEN_FAILURE, result: err.response });
  }
}

function* watchLogin() {
  yield takeLatest(LOGIN_REQUEST, login);
}

function* watchSilentRefresh() {
  yield takeLatest(REFRESH_TOKEN_REQUEST, silentRefresh);
}

export default function* authSaga() {
  yield all([
    fork(watchLogin),
    fork(watchSilentRefresh),
  ]);
}
