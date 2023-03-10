import React from "react";
import "./styles.css";

import Header from "./Header";
import Search from "./Search";
import City from "./City";
import Weather from "./Weather";
import Forecast from "./Forecast";
import Git from "./Git";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <City city="Montreal" />
      <Weather temperature={9} />
      <Forecast />
      <Git />
    </div>
  );
}
