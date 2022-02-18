import axios from 'axios';
import {
  all, fork, put, call, takeLatest, takeLeading,
} from 'redux-saga/effects';
import { UPLOAD_POST_IMAGE, UPLOAD_POST_IMAGE_SUCCESS } from '@Constants/actionTypes';

const imageUploadApi = (image) => axios.post('/api/util', image);

function* imageUpload(action) {
  try {
    const result = yield call(imageUploadApi, action.payload);
    yield put({ type: UPLOAD_POST_IMAGE_SUCCESS, result });
  } catch (error) {
    console.log(error);
  }
}

function* watchImageUpload() {
  yield takeLeading(UPLOAD_POST_IMAGE, imageUpload);
}

export default function* utilSaga() {
  yield all([
    fork(watchImageUpload),
  ]);
}
