import axios from 'axios';
import {
  all, fork, put, call, takeLatest,
} from 'redux-saga/effects';
import { push } from 'connected-next-router';
import {
  GET_POST_LIST_REQUEST, GET_POST_LIST_SUCCESS, GET_POST_LIST_FAILURE,
  GET_POST_REQUEST, GET_POST_SUCCESS, GET_POST_FAILURE,
  ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE,
  DELETE_POST_REQUEST, DELETE_POST_SUCCESS, DELETE_POST_FAILURE,
  UPDATE_POST_REQUEST, UPDATE_POST_SUCCESS, UPDATE_POST_FAILURE,
} from '@Constants/actionTypes';

const getPostListApi = () => axios.get(`${process.env.REACT_APP_BASE_URL}/api/post/list`);
const getPostApi = (id) => axios.get(`${process.env.REACT_APP_BASE_URL}/api/post`, { params: id });
const addPostApi = (data) => axios.post('/api/post', { params: data }, { withCredentials: true });
const deletePostApi = (id) => axios.delete('/api/post', { params: id }, { withCredentials: true });
const updatePostApi = (data) => axios.put('/api/post', { params: data }, { withCredentials: true });

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

function* addPost(action) {
  try {
    const { data } = yield call(addPostApi, { data: action.payload });

    if (data.success) {
      yield put({ type: ADD_POST_SUCCESS, result: data.message });
      yield put(push({ pathname: '/' }));
    } else {
      yield put({ type: ADD_POST_FAILURE, result: data.message });
    }
  } catch (err) {
    yield put({ type: ADD_POST_FAILURE, result: '접근 권한이 없습니다' });
  }
}

function* deletePost(action) {
  try {
    const { data } = yield call(deletePostApi, { id: action.payload });

    if (data.success) {
      yield put({ type: DELETE_POST_SUCCESS, result: data.message });
      yield put(push({ pathname: '/post' }));
    } else {
      yield put({ type: DELETE_POST_FAILURE, result: data.message });
    }
  } catch (err) {
    yield put({ type: DELETE_POST_FAILURE, result: '접근 권한이 없습니다' });
  }
}

function* updatePost(action) {
  try {
    const { data } = yield call(updatePostApi, { data: action.payload });

    if (data.success) {
      yield put({ type: UPDATE_POST_SUCCESS, result: data.message });
      yield put(push({ pathname: `/post/${action.payload.id}` }));
    } else {
      yield put({ type: UPDATE_POST_FAILURE, result: data.message });
    }
  } catch (err) {
    yield put({ type: UPDATE_POST_FAILURE, result: '접근 권한이 없습니다' });
  }
}

function* watchGetPostList() {
  yield takeLatest(GET_POST_LIST_REQUEST, getPostList);
}

function* watchGetPost() {
  yield takeLatest(GET_POST_REQUEST, getPost);
}

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
}

function* watchDeletePost() {
  yield takeLatest(DELETE_POST_REQUEST, deletePost);
}

function* watchUpdatePost() {
  yield takeLatest(UPDATE_POST_REQUEST, updatePost);
}

export default function* postSaga() {
  yield all([
    fork(watchGetPostList),
    fork(watchGetPost),
    fork(watchAddPost),
    fork(watchDeletePost),
    fork(watchUpdatePost),
  ]);
}
