import { combineReducers } from "redux";
import userReducer from "./user";
import TopicsListReducer from "./TopicsList";
import postReducer from "./Post";

const rootReducer = combineReducers({
  userReducer,
  TopicsListReducer,
  postReducer,
});
export default rootReducer;
