import {
  GET_POST_LIST_REQUEST,
  GET_POST_LIST_SUCCESS,
  GET_POST_LIST_FAILURE,
  ADD_POST
} from '../../constants/actionTypes';

export const getPostList = () => ({
  type: GET_POST_LIST_REQUEST
});

export const addPost = data => ({
  type: ADD_POST,
  payload: data
});

const initialState = {
  post: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST_LIST_REQUEST:
      return {
        ...state
      }
    case GET_POST_LIST_SUCCESS:
      return {
        ...state,
        post: action.result.data
      }
    case GET_POST_LIST_FAILURE:
      return {
        ...state
      }
    case ADD_POST:
      return {
        ...state,
        title: action.payload.title
      }
    default:
      return state;
  }
};

export default reducer;