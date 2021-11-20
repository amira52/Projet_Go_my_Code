
import { GET_ALL_TOPICS_FAIL,
     GET_ALL_TOPICS_LOAD, 
     GET_ALL_TOPICS_SUCCESS, 
     GET_TOPIC} 
     from "../constants/TopicList";

const initialState = {
  topics: [],
  isLoad: false,
  isError: false,
  topic: {},
};

const TopicsListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_TOPICS_LOAD:
      return { ...state, isLoad: true };
    case GET_ALL_TOPICS_SUCCESS:
      return { ...state, topics: payload.topics, isLoad: false };
    case GET_TOPIC:
      return { ...state, topic: payload.topic, isLoad: false };
    case GET_ALL_TOPICS_FAIL:
      return { ...state, isError: true, isLoad: false };
    default:
      return state;
  }
};
export default TopicsListReducer;
