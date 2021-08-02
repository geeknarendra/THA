import { createStore } from "redux";
import rootReducer from "./Reducer";
import { loadState, saveState } from "./localStorage";

const preExistedState = loadState();
const store = createStore(
  rootReducer,
  preExistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(()=>{
  saveState(store.getState());
})



export default store;