import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import test from './test';
import post from './post';
import util from './util';

const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        return {
          ...state,
          ...action.payload
        };
      default:
        return state;
    }
  },
  test,
  post,
  util
});

export default rootReducer;