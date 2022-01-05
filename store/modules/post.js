import {
  GET_POST_LIST_REQUEST,
  GET_POST_LIST_SUCCESS,
  GET_POST_LIST_FAILURE
} from '../../constants/actionTypes';

const ADD_POST = 'post/ADD_POST';

export const getPostList = () => ({
  type: GET_POST_LIST_REQUEST
});

export const addPost = (data) => ({
  type: ADD_POST,
  payload: data
});

const initialState = {
  postTitle: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST_LIST_REQUEST:
      console.log('loading');
      break;
    case GET_POST_LIST_SUCCESS:
      console.log('SUCCESS');
      break;
    case GET_POST_LIST_REQUEST:
      console.log('REQUEST');
      break;
    case ADD_POST:
      console.log('aaa', action)
      return {
        ...state,
        title: action.payload.title
      }
    default:
      return state;
  }
};

export default reducer;