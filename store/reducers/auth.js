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
    author: '',
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
      console.log(userId, userAuth);

      return {
        ...state,
        user: {
          id: userId,
          author: userAuth,
        },
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
