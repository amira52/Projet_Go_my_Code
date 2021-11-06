import { ADD_POST } from "../constants/posts";


export const addPost = (newPost) => {
  return {
    type: ADD_POST,
    payload: newPost,
  };
};