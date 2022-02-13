import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import { routerReducer } from 'connected-next-router';
import test from '@Store/reducers/test';
import post from '@Store/reducers/post';
import util from '@Store/reducers/util';

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE: {
      const nextState = {
        ...state,
        ...action.payload,
      };
      if (typeof window !== 'undefined' && state?.router) { nextState.router = state.router; }
      return nextState;
    }
    default: {
      const combineReducer = combineReducers({
        router: routerReducer,
        test,
        post,
        util,
      });
      return combineReducer(state, action);
    }
  }
};

export default rootReducer;
