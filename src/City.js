import React from "react";
import "./city.css";

export default function City(props) {
  return (
    <div className="MainCity">
      <br />
      <h2 id="city-name"> {props.city} </h2>
      <div className="city-info">
        <p> Last updated on: Sunday at 10:30</p>
        <p id="humidity"> Humidity: </p>
        <p id="wind-speed"> Wind: </p>
      </div>
    </div>
  );
}
