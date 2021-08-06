const addCity = (city) => {
  return {
    type: "ADD_CITY",
    payload: city,
  };
};

const addCityData = (city) => {
  return (dispatch) => {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=d12f8ac96da344e0a93141803210408&q=${city}`
    )
      .then((res) => res.json())
      .then((data) => {
        return dispatch({
          type: "ADD_CITY_DATA",
          payload: data,
        });
      });
  };
};

export { addCity, addCityData };
