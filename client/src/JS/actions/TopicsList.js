import axios from "axios";
import {
  GET_ALL_TOPICS_FAIL,
  GET_ALL_TOPICS_LOAD,
  GET_ALL_TOPICS_SUCCESS,
  GET_TOPIC,
} from "../constants/TopicList";

export const getAllTopics = () => async (dispatch) => {
  dispatch({ type: GET_ALL_TOPICS_LOAD });
  try {
    let result = await axios.get("/api/topic");
    dispatch({ type: GET_ALL_TOPICS_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({ type: GET_ALL_TOPICS_FAIL });
  }
};

export const getTopic = (id) => async (dispatch) => {
  dispatch({ type: GET_ALL_TOPICS_LOAD });
  try {
    let { data } = await axios.get(`/api/topic/${id}`);
    dispatch({ type: GET_TOPIC, payload: data });
  } catch (error) {
    dispatch({ type: GET_ALL_TOPICS_FAIL });
  }
};

export const deleteTopict = (id) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    await axios.delete(`/api/topic/${id}`, config);
    dispatch(getAllTopics());
  } catch (error) {
    dispatch({ type: GET_ALL_TOPICS_FAIL });
  }
};

export const addTopic = (topic, history) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    await axios.post("/api/topic", topic, config);
    history.push("/topics");
    dispatch(getAllTopics());
  } catch (error) {
    dispatch({ type: GET_ALL_TOPICS_FAIL });
  }
};

export const editTopic = (id, topic, history) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    await axios.put(`/api/topic/${id}`, topic, config);
    dispatch(getAllTopics());
    alert("Topics Updated");
    history.push("/topics");
  } catch (error) {
    dispatch({ type: GET_ALL_TOPICS_FAIL });
  }
};
