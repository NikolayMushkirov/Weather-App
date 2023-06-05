import React from "react";

import MainPage from "./pages/MainPage/MainPage";
import GetWeatherData from "./api/getWeatherData";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <MainPage />
      <GetWeatherData />
    </div>
  );
}

export default App;
