import {
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
  REFRESH_TOKEN_REQUEST, REFRESH_TOKEN_SUCCESS, REFRESH_TOKEN_FAILURE,
} from '@Constants/actionTypes';
import { toast } from 'react-toastify';

export const login = (data) => ({
  type: LOGIN_REQUEST,
  payload: data,
});

const initialState = {
  user: {
    id: '',
    auth: '',
  },
};

const auth = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
      };
    }
    case LOGIN_SUCCESS: {
      const { userId, userAuth } = action.result;

      return {
        ...state,
        user: {
          id: userId,
          auth: userAuth,
        },
      };
    }
    case LOGIN_FAILURE: {
      toast.error(action.result);
      return state;
    }
    case REFRESH_TOKEN_REQUEST: {
      return {
        ...state,
      };
    }
    case REFRESH_TOKEN_SUCCESS: {
      toast.info('success');
      console.log('REFRESH_TOKEN_SUCCESS');
      return {
        ...state,
      };
    }
    case REFRESH_TOKEN_FAILURE: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default auth;
