import { combineReducers } from "redux";
import addCityDataReducer from "./addCityDataReducer";
import addCityReducer from "./addCityReducer";

const reducers = combineReducers({
  addCity: addCityReducer,
  addCityData: addCityDataReducer,
});

export default reducers;
