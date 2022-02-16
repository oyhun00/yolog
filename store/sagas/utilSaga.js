import axios from 'axios';
import {
  all, fork, put, call, takeLatest,
} from 'redux-saga/effects';
import { UPLOAD_POST_IMAGE } from '@Constants/actionTypes';

const imageUploadApi = (image) => axios.post('/api/util', image, {
  headers: {
    'Content-type': 'multipart/form-data',
  },
});

function* imageUpload(action) {
  try {
    const result = yield call(imageUploadApi, { image: action.payload });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

function* watchImageUpload() {
  yield takeLatest(UPLOAD_POST_IMAGE, imageUpload);
}

export default function* utilSaga() {
  yield all([
    fork(watchImageUpload),
  ]);
}
