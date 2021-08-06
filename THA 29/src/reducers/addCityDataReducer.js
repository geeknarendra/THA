const addCityDataReducer = (state = {}, action) => {
  if (action.type === "ADD_CITY_DATA") {
    return action.payload;
  }
  return state;
};

export default addCityDataReducer;
