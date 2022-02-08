import {
  GET_POST_LIST_REQUEST,
  GET_POST_LIST_SUCCESS,
  GET_POST_LIST_FAILURE,
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
  GET_POST_FAILURE,
  ADD_POST
} from '../../constants/actionTypes';

export const getPostList = () => ({
  type: GET_POST_LIST_REQUEST
});

export const getPost = id => ({
  type: GET_POST_REQUEST,
  payload: id
});

export const addPost = data => ({
  type: ADD_POST,
  payload: data
});

// export const getAllPostIds = () => {
//   return 
// };

const initialState = {
  selectedPost: '',
  posts: [],
  post: {
    id: '',
    title: '',
    content: '',
    crtDttm: '',
    udtDttm: '',
    deleteFl: false,
  }
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
        posts: action.result.data
      }
    case GET_POST_LIST_FAILURE:
      return {
        ...state
      }
    case GET_POST_REQUEST:
      return {
        ...state
      }
    case GET_POST_SUCCESS:
      const { id, title, content, crtDttm, udtDttm, deleteFl } = action.result.data;
      
      return {
        ...state,
        post: {
          id,
          title,
          content,
          crtDttm,
          udtDttm,
          deleteFl,
        }
      }
    case GET_POST_FAILURE:
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