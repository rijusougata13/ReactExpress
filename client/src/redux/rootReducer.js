import { combineReducers } from "redux";
import blogReducer from "./blogs/blogReducer";
import useReducer from "./user/userReducer";

const rootReducer = combineReducers({
  blogs: blogReducer,
  users: useReducer,
});

export default rootReducer;
