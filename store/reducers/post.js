import {
  GET_POST_LIST_REQUEST, GET_POST_LIST_SUCCESS, GET_POST_LIST_FAILURE,
  GET_POST_REQUEST, GET_POST_SUCCESS, GET_POST_FAILURE,
  ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE,
  DELETE_POST_REQUEST, DELETE_POST_SUCCESS, DELETE_POST_FAILURE,
  UPDATE_POST_REQUEST, UPDATE_POST_SUCCESS, UPDATE_POST_FAILURE,
} from '@Constants/actionTypes';
import { toast } from 'react-toastify';

export const getPostList = (payload) => ({
  type: GET_POST_LIST_REQUEST,
  payload,
});

export const getPost = (id) => ({
  type: GET_POST_REQUEST,
  payload: id,
});

export const addPost = (data) => ({
  type: ADD_POST_REQUEST,
  payload: data,
});

export const deletePost = (id) => ({
  type: DELETE_POST_REQUEST,
  payload: id,
});

export const updatePost = (data) => ({
  type: UPDATE_POST_REQUEST,
  payload: data,
});

const initialState = {
  selectedPost: '',
  posts: [],
  postsCount: 0,
  tags: [],
  postDetail: {
    id: '',
    title: '',
    content: '',
    thumbnail: '',
    thumbnailText: '',
    tags: '',
    crtDttm: '',
    udtDttm: '',
    deleteFl: false,
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_POST_LIST_REQUEST: {
      return { ...state };
    }
    case GET_POST_LIST_SUCCESS: {
      const { posts, postsCount, tags } = action.result.data;

      return {
        ...state,
        posts,
        postsCount,
        tags,
      };
    }
    case GET_POST_LIST_FAILURE: {
      return { ...state };
    }
    case GET_POST_REQUEST: {
      return { ...state };
    }
    case GET_POST_SUCCESS: {
      const {
        id, title, content, thumbnail, tags, crtDttm, udtDttm, deleteFl,
      } = action.result.data;

      return {
        ...state,
        postDetail: {
          id,
          title,
          content,
          thumbnail,
          tags,
          crtDttm,
          udtDttm,
          deleteFl,
        },
      };
    }
    case GET_POST_FAILURE: {
      return { ...state };
    }
    case ADD_POST_REQUEST: {
      return { ...state };
    }
    case ADD_POST_SUCCESS: {
      toast.success(action.result);
      return { ...state };
    }
    case ADD_POST_FAILURE: {
      toast.error(action.result);
      return { ...state };
    }
    case UPDATE_POST_REQUEST: {
      return { ...state };
    }
    case UPDATE_POST_SUCCESS: {
      toast.success(action.result);
      return { ...state };
    }
    case UPDATE_POST_FAILURE: {
      toast.error(action.result);
      return { ...state };
    }
    case DELETE_POST_REQUEST: {
      return { ...state };
    }
    case DELETE_POST_SUCCESS: {
      toast.success(action.result);
      return { ...state };
    }
    case DELETE_POST_FAILURE: {
      toast.error(action.result);
      return { ...state };
    }
    default:
      return state;
  }
};

export default reducer;
