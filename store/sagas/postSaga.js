import axios from 'axios';
import { all, fork, put, call, takeLatest, takeEvery } from 'redux-saga/effects';
import {
  GET_POST_LIST_REQUEST,
  GET_POST_LIST_SUCCESS,
  GET_POST_LIST_FAILURE,
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
  GET_POST_FAILURE
} from '../../constants/actionTypes';

const getPostListApi = () => {
  return axios.get('http://localhost:3000/api/post');
}

const getPostApi = (id) => {
  return axios.get(`http://localhost:3000/api/post`, { params: id });
}

function* getPostList() {
  console.log("qwd12312312 getPostList")
  try {
    const result = yield call(getPostListApi);
    yield put({ type: GET_POST_LIST_SUCCESS, result });
  } catch (err) {
    yield put({ type: GET_POST_LIST_FAILURE, result: err.response });
  }
}

function* getPost(action) {
  try {
    const result = yield call(getPostApi, { id: action.payload });
    yield put({ type: GET_POST_SUCCESS, result });
  } catch (err) {
    yield put({ type: GET_POST_FAILURE, result: err.response });
  }
}

function* watchGetPostList() {
  console.log("qwd12312312 watchGetPostList")
  yield takeEvery(GET_POST_LIST_REQUEST, getPostList);
}

function* watchGetPost() {
  yield takeEvery(GET_POST_REQUEST, getPost);
}

export default function* postSaga() {
  yield all([fork(watchGetPostList), fork(watchGetPost)]);
}
