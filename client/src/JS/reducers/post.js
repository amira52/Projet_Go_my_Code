import {
  GET_ALL_POSTS_FAIL,
  GET_ALL_POSTS_LOAD,
  GET_ALL_POSTS_SUCCESS,
  GET_POST,
} from "../constants/Post";

const initialState = {
  posts: [],
  isLoad: false,
  isError: false,
  post: {},
};

const postReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_POSTS_LOAD:
      return { ...state, isLoad: true };
    case GET_ALL_POSTS_SUCCESS:
      return { ...state, posts: payload.posts, isLoad: false };
    case GET_POST:
      return { ...state, post: payload.post, isLoad: false };
    case GET_ALL_POSTS_FAIL:
      return { ...state, isError: true, isLoad: false };
    default:
      return state;
  }
};
export default postReducer;
