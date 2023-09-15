import { Routes, Route } from "react-router-dom";

import useLocalStorage from "use-local-storage";

import GetWeatherData from "api/GetWeatherData";

import MainPage from "pages/MainPage/MainPage";
import DetailedForecastPage from "pages/DetailedForecastPage/DetailedForecastPage";

import "./App.scss";

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="App" data-theme={theme}>
      <Routes>
        <Route
          path="/"
          element={<MainPage switchTheme={switchTheme} theme={theme} />}
        />
        <Route path="forecast" element={<DetailedForecastPage />} />
      </Routes>
      {/* <GetWeatherData /> */}
    </div>
  );
}

export default App;
