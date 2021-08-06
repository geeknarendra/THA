import { useDispatch, useSelector } from "react-redux";
import { addCity, addCityData } from "./actions";
import "./App.css";

function App() {
  const city = useSelector((state) => state.addCity);
  const cityData = useSelector((state) => state.addCityData);
  const dispatch = useDispatch();

  return (
    <div className="app">
      <header>
        {cityData.location ? (
          <div className="col">
            <img src={cityData.current.condition.icon} id="status" />
            <h>{cityData.current.temp_c} °C</h>
          </div>
        ) : (
          <></>
        )}
        <div className="col">
          <input
            id="input"
            type="text"
            placeholder="enter city"
            value={city}
            onChange={(e) => {
              dispatch(addCity(e.target.value));
            }}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                dispatch(addCityData(city));
                dispatch(addCity(""));
              }
            }}
          />

          <button
            id="submit"
            onClick={() => {
              dispatch(addCityData(city));
              dispatch(addCity(""));
            }}
          >
            go
          </button>

          {cityData.location ? (
            <div>
              <h>{cityData.location.name}</h>
            </div>
          ) : (
            <h id="error">No Place Found</h>
          )}
        </div>
      </header>

      {cityData.location ? (
        <div className="wrapper">
          <div className="cube">
            <div className="cube-row">
              <h1>description</h1>
              <ion-icon name="information-circle"></ion-icon>
            </div>
            <div className="cube-row">
              <p>{cityData.current.condition.text}</p>
            </div>
          </div>
          <div className="cube">
            <div className="cube-row">
              <h1>feels like</h1>
              <ion-icon name="thermometer"></ion-icon>
            </div>
            <div className="cube-row">
              <p id="feels-like">{cityData.current.feelslike_c}°C</p>
            </div>
          </div>
          <div className="cube">
            <div className="cube-row">
              <h1>humidity</h1>
              <ion-icon name="water"></ion-icon>
            </div>
            <div className="cube-row">
              <p id="humidity">{cityData.current.humidity}</p>
            </div>
          </div>
          <div className="cube">
            <div className="cube-row">
              <h1>wind speed</h1>
              <ion-icon name="rainy"></ion-icon>
            </div>
            <div className="cube-row">
              <p id="wind-speed">{cityData.current.wind_kph}kph</p>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
