import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import { routerReducer } from 'connected-next-router';
import post from '@Store/reducers/post';
import util from '@Store/reducers/util';
import auth from '@Store/reducers/auth';

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
        post,
        util,
        auth,
      });
      return combineReducer(state, action);
    }
  }
};

export default rootReducer;
