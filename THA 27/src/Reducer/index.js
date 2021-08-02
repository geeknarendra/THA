import { combineReducers } from "redux";
import TodoReducer from "./TodoReducer";

const rootReducer = combineReducers({
  Todo: TodoReducer,
});

export default rootReducer;
