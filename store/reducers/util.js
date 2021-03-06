import {
  SET_HEADER_SELECTED_KEYS,
} from '@Constants/actionTypes';

export const selectedKeys = (id) => ({
  type: SET_HEADER_SELECTED_KEYS,
  payload: { key: id },
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
    default:
      return state;
  }
};

export default util;
