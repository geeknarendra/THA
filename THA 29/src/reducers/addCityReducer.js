const addCityReducer = (state = "", action) => {
  if (action.type === "ADD_CITY") {
    return action.payload;
  }
  return state;
};
export default addCityReducer;
