import {
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
} from '@Constants/actionTypes';

export const login = (data) => ({
  type: LOGIN_REQUEST,
  payload: data,
});

const initialState = {
  user: {
    id: '',
    password: '',
    author: '',
  },
};

const auth = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return state;
    }
    case LOGIN_SUCCESS: {
      // console.log('LOGIN_SUCCESS', action);
      // const { userId, userPassword, userAuth } = action.result;

      return {
        ...state,
        // user: {
        //   id: userId,
        //   password: userPassword,
        //   author: userAuth,
        // },
      };
    }
    case LOGIN_FAILURE: {
      return state;
    }
    default:
      return state;
  }
};

export default auth;
