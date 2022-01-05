import axios from 'axios';
import { all, fork, put, call, takeLatest } from 'redux-saga/effects';
import {
  GET_POST_LIST_REQUEST,
  GET_POST_LIST_SUCCESS,
  GET_POST_LIST_FAILURE
} from '../../constants/actionTypes';

function getPostListApi() {
  return axios.get('https://jsonplaceholder.typicode.com/todos/1')
}

function* getPostList(action) {
  try {
    const result = yield call(getPostListApi);

    yield put({ type: GET_POST_LIST_SUCCESS, data: result });
  } catch (err) {
    yield put({ type: GET_POST_LIST_FAILURE, data: err.response });
  }
}

function* watchGetPostList() {
  yield takeLatest(GET_USER_TICKET_REQUEST, getPostList);
}

export default function* postSaga() {
  yield all([fork(watchGetPostList)]);
}
