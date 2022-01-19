import axios from 'axios';
import { all, fork, put, call, takeLatest } from 'redux-saga/effects';
import {
  GET_POST_LIST_REQUEST,
  GET_POST_LIST_SUCCESS,
  GET_POST_LIST_FAILURE
} from '../../constants/actionTypes';

function getPostListApi() {
  console.log('getPostListApi');
  return axios.get('http://localhost:3001/api/post');
}

function* getPostList() {
  console.log('getPostList');
  try {
    const result = yield call(getPostListApi);

    yield put({ type: GET_POST_LIST_SUCCESS, result });
  } catch (err) {
    yield put({ type: GET_POST_LIST_FAILURE, result: err.response });
  }
}

function* watchGetPostList() {
  yield takeLatest(GET_POST_LIST_REQUEST, getPostList);
}

export default function* postSaga() {
  yield all([fork(watchGetPostList)]);
}
