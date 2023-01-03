import React, { useState } from "react";
import "./search.css";
export default function Search(props) {
  let [, setCity] = useState(props.city);
  function handleSearch(event) {
    event.preventDefault();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Search">
      <br />
      <form id="search-bar" onSubmit={handleSearch}>
        <input
          id="search"
          type="search"
          name="search-city"
          placeholder="Type your city here..."
          autoComplete="off"
          autoFocus
          onChange={updateCity}
        />

        <input
          type="submit"
          value="Search"
          className="btn"
          id="search-button"
        />
      </form>
    </div>
  );
}
