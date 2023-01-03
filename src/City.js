import React, { useState } from "react";
import "./city.css";
import Search from "./Search";

export default function City(props) {
  let [city, setCity] = useState(props.city);
  function handleSearch(event) {
    event.preventDefault();
    alert(`${city}`);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  <Search />;
  return (
    <div className="MainCity">
      <br />
      <h2 id="city-name" onChange={updateCity}>
        {" "}
        {props.city}{" "}
      </h2>
      <div className="city-info">
        <p> Last updated on: Sunday at 10:30</p>
        <p id="humidity"> Humidity: </p>
        <p id="wind-speed"> Wind: </p>
      </div>
    </div>
  );
}
