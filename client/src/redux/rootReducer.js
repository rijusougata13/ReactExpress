import { combineReducers } from "redux";
import blogReducer from "./blogs/blogReducer";

const rootReducer = combineReducers({
  blogs: blogReducer,
});

export default rootReducer;
