
import { combineReducers } from "redux";
import inputData from "./input";

const rootReducer=combineReducers({
    userState:inputData
})
export default rootReducer;