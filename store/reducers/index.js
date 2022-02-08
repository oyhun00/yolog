import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import test from 'store/reducers/test';
import post from 'store/reducers/post';
import util from 'store/reducers/util';

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combineReducer = combineReducers({
        test,
        post,
        util
      })
      return combineReducer(state, action);
    }
  }
};

export default rootReducer;