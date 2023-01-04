import React from "react";
import "./styles.css";

import Header from "./Header";
import Search from "./Search";
import City from "./City";
import Weather from "./Weather";
import Forecast from "./Forecast";
export default function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <City city="Montreal" />
      <Weather temperature={9} />
      <Forecast />
      <a
        href="https://github.com/CatLouise3/weather-react"
        class="git"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        GitHub{" "}
      </a>{" "}
      by{" "}
      <a
        href="https://www.linkedin.com/in/catherine-mcfee-b96899126/"
        class="linkedIn"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        Cat
      </a>
    </div>
  );
}
