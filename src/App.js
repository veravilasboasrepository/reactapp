import React from "react";
import "./App.css";


function App() {
  return (
    <div className="App">
      <div className="container">
        <form>
          <input type="search" placeholder="Enter a city.." />
          <div className="col-3">
            <button type="Submit">Search</button>
          </div>
        </form>
        <div className="WeatherTemperature">
          <h1>Lisbon</h1>
          <div className="weather-detail__text">Friday 18:35</div>
          <span className="temperature"> 23</span>
          <span className="unit">
            °C
            <img
              className="icon"
              src="https://static-00.iconduck.com/assets.00/weather-clear-symbolic-icon-511x512-zfj6vb21.png"
            />{" "}
          </span>
        </div>
        <ul>
          <li>Friday 05:00</li>
          <li>
            Last updated: <span id="date"></span>
          </li>
        </ul>
        <main>
          <div className="row mt-3">
            <div className="col-6">
              <div className="d-flex">
      
                  <canvas width="38" height="38"></canvas>
       
                <ul>
                  <li>Temperature: 20°C</li>
                  <li>Description: zzzz</li>
                  <li>Humidity: xxxx </li>
                  <li>Wind: 123 km/h</li>
                  <li></li>
                </ul>
                <div className="row">
                  <div className="col-6">
                    <div className="forecast-temperature">14°</div>
                  </div>
                  <div className="col-sm-2">
                    <div className="forecast-day">Sun</div>
            
    
                      <img
                        className="icon"
                        src="https://static-00.iconduck.com/assets.00/weather-clear-symbolic-icon-511x512-zfj6vb21.png"
                      />
                      <canvas width="38" height="38"></canvas>
           
                    <div>15°</div>
                  </div>
                  <div className="col-sm-2">
                    <div>Mon</div>
                
                      <canvas width="38" height="38"></canvas>

                    <div >12°</div>
                  </div>
                  <div className="col-sm-2">
                    <div >Tue</div>

                      <canvas width="38" height="38"></canvas>
             
                    <div >12°</div>
                  </div>

                  <div className="col-6">
                    <div class="forecast-day">Wed</div>

                      <canvas width="38" height="38"></canvas>
              
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.delac.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            vera vilas boas
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/wecodeschool/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://suspicious-beaver-111c4d.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>{" "}
    </div>
  ); }
export default App;
