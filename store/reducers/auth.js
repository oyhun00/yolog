import {
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
  SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE,
  REFRESH_TOKEN_REQUEST, REFRESH_TOKEN_SUCCESS, REFRESH_TOKEN_FAILURE,
} from '@Constants/actionTypes';
import { toast } from 'react-toastify';

export const login = (data) => ({
  type: LOGIN_REQUEST,
  payload: data,
});

export const signUp = (data) => ({
  type: SIGN_UP_REQUEST,
  payload: data,
});

const initialState = {
  user: {
    id: '',
    auth: '',
  },
  isLogin: false,
};

const auth = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isLogin: action.result,
      };
    }
    case LOGIN_FAILURE: return toast.error(action.result);
    case SIGN_UP_REQUEST:
    case SIGN_UP_SUCCESS: {
      toast.info('SUCCESS');
      return {
        ...state,
      };
    }
    case SIGN_UP_FAILURE: {
      toast.error(action.result);
      return {
        ...state,
      };
    }
    case REFRESH_TOKEN_SUCCESS: {
      return {
        ...state,
        isLogin: action.result,
      };
    }
    case REFRESH_TOKEN_FAILURE: return state;
    default:
      return state;
  }
};

export default auth;
