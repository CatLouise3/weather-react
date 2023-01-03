import React from "react";

import "./weather.css";

export default function Weather(props) {
  return (
    <div className="Weather">
      <div id="weather-info">
        <div class="d-flex">
          <div class="p-3">
            <i class="far fa-sun" id="weather-icon"></i>
          </div>
          <div class="p-3" id="degrees">
            {props.temperature}°C
          </div>
          <div class="p-3" id="temp-description">
            Sunny
          </div>
        </div>
      </div>
    </div>
  );
}
