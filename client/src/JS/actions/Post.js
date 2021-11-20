import axios from "axios";
import {
  GET_ALL_POSTS_FAIL,
  GET_ALL_POSTS_LOAD,
  GET_ALL_POSTS_SUCCESS,
  GET_POST,
} from "../constants/Post";

export const getAllPosts = () => async (dispatch) => {
  dispatch({ type: GET_ALL_POSTS_LOAD });
  try {
    let result = await axios.get("/api/forum");
    dispatch({ type: GET_ALL_POSTS_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({ type: GET_ALL_POSTS_FAIL });
  }
};

export const getPost = (id) => async (dispatch) => {
  dispatch({ type: GET_ALL_POSTS_LOAD });
  try {
    let { data } = await axios.get(`/api/forum/${id}`);
    dispatch({ type: GET_POST, payload: data });
  } catch (error) {
    dispatch({ type: GET_ALL_POSTS_FAIL });
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/forum/${id}`);
    dispatch(getAllPosts());
  } catch (error) {
    dispatch({ type: GET_ALL_POSTS_FAIL });
  }
};

export const addPost = (newPost, history) => async (dispatch) => {
  try {
    await axios.post("/api/forum", newPost);
    //history.push("/forum");
    dispatch(getAllPosts());
  } catch (error) {
    dispatch({ type: GET_ALL_POSTS_FAIL });
  }
};

export const editPost = (id, post, history) => async (dispatch) => {
  try {
    await axios.put(`/api/forum/${id}`, post);
    dispatch(getAllPosts());
    alert("Post Updated");
    history.push("/forum");
  } catch (error) {
    dispatch({ type: GET_ALL_POSTS_FAIL });
  }
};
