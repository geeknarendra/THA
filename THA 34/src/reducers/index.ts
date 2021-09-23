import counterReducer from "./counterReducer";
import notesReducer from "./notesReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    counter: counterReducer,
    notes: notesReducer,
})

export type ReducerType = ReturnType<typeof rootReducer>

export default rootReducer