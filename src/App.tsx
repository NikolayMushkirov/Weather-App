import { Routes, Route } from "react-router-dom";

import MainPage from "pages/MainPage/MainPage";
import DetailedForecastPage from "pages/DetailedForecastPage/DetailedForecastPage";

import useTheme from "hooks/useTheme";

import "./App.scss";

function App() {
  const { theme } = useTheme();

  return (
    <div className="App" data-theme={theme}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="forecast" element={<DetailedForecastPage />} />
      </Routes>
    </div>
  );
}

export default App;
