import { div } from 'prelude-ls';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  let [city, setCity] = useState("")
  let [cityData, setCityData] = useState({})

  function updateCityData() {
    fetch(`https://api.weatherapi.com/v1/current.json?key=d12f8ac96da344e0a93141803210408&q=${city}`)
      .then((res) => res.json())
      .then((data) => {
        setCityData(data);
      })
  }

  useEffect(() => {
    updateCityData();
  }, []);

  return (

    <div class="app">
      <header>

        <div class="col">
          <input id="input" type="text" placeholder="enter city" value={city}
            onChange={(e) => {
              setCity(e.target.value)
            }} />

          <button id="submit"

            onClick={() => {
              updateCityData()
              setCity("")
            }}
          >go</button>

          {cityData.location ?
            <div>
              <div class="row">
                <h id="temp">temp</h>
              </div>
            </div>
            : <h id="error">No Place Found</h>}

        </div>
      </header>
      <div class="wrapper">
        <div class="cube">
          <div class="cube-row">
            <h1>description</h1>
            <ion-icon name="information-circle"></ion-icon>
          </div>
          <div class="cube-row">
            <p id="desc"></p>
          </div>
        </div>
        <div class="cube">
          <div class="cube-row">
            <h1>feels like</h1>
            <ion-icon name="thermometer"></ion-icon>
          </div>
          <div class="cube-row">
            <p id="feels-like"></p>
          </div>

        </div>
        <div class="cube">
          <div class="cube-row">
            <h1>humidity</h1>
            <ion-icon name="water"></ion-icon>
          </div>
          <div class="cube-row">
            <p id="humidity"></p>
          </div>

        </div>
        <div class="cube">
          <div class="cube-row">
            <h1>wind speed</h1>
            <ion-icon name="rainy"></ion-icon>
          </div>
          <div class="cube-row">
            <p id="wind-speed"></p>
          </div>

        </div>
      </div>
    </div >



  );
}

export default App;
