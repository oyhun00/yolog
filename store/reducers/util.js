import {
  SET_HEADER_SELECTED_KEYS,
  UPLOAD_POST_IMAGE,
  UPLOAD_POST_IMAGE_SUCCESS,
} from '@Constants/actionTypes';

export const selectedKeys = (id) => ({
  type: SET_HEADER_SELECTED_KEYS,
  payload: { key: id },
});

export const uploadImage = (form) => ({
  type: UPLOAD_POST_IMAGE,
  payload: { form },
});

const initialState = {
  key: '0',
};

const util = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_HEADER_SELECTED_KEYS:
      return {
        ...state,
        key: action.payload.key,
      };
    case UPLOAD_POST_IMAGE:
      return {
        ...state,
      };
    case UPLOAD_POST_IMAGE_SUCCESS: {
      console.log('UPLOAD_POST_IMAGE_SUCCESS', action.payload);

      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default util;
