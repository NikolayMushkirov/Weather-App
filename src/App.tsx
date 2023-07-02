import { Routes, Route } from "react-router-dom";

import MainPage from "pages/MainPage/MainPage";
import GetWeatherData from "api/GetWeatherData";

import "./App.scss";
import WeatherForecastPage from "pages/WeatherForecastPage/WeatherForecastPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="forecast" element={<WeatherForecastPage />} />
      </Routes>
      <GetWeatherData/>
    </div>
  );
}

export default App;
