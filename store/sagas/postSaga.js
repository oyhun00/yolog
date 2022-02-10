import axios from 'axios';
import {
  all, fork, put, call, takeLatest,
} from 'redux-saga/effects';
import {
  GET_POST_LIST_REQUEST,
  GET_POST_LIST_SUCCESS,
  GET_POST_LIST_FAILURE,
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
  GET_POST_FAILURE,
} from '@Constants/actionTypes';

const getPostListApi = () => axios.get(`${process.env.REACT_APP_BASE_URL}/api/post`);

const getPostApi = (id) => axios.get(`${process.env.REACT_APP_BASE_URL}/api/post`, { params: id });

function* getPostList() {
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
  yield takeLatest(GET_POST_LIST_REQUEST, getPostList);
}

function* watchGetPost() {
  yield takeLatest(GET_POST_REQUEST, getPost);
}

export default function* postSaga() {
  yield all([fork(watchGetPostList), fork(watchGetPost)]);
}
