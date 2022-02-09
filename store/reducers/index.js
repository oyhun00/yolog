import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import test from '@Store/reducers/test';
import post from '@Store/reducers/post';
import util from '@Store/reducers/util';

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combineReducer = combineReducers({
        test,
        post,
        util,
      });
      return combineReducer(state, action);
    }
  }
};

export default rootReducer;
