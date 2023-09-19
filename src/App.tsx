import { Routes, Route } from "react-router-dom";

import useLocalStorage from "use-local-storage";

import MainPage from "pages/MainPage/MainPage";
import DetailedForecastPage from "pages/DetailedForecastPage/DetailedForecastPage";

import "./App.scss";
import useTheme from "hooks/useTheme";

function App() {

  const {theme} = useTheme()

  return (
    <div className="App" data-theme={theme}>
      <Routes>
        <Route
          path="/"
          element={<MainPage  />}
        />
        <Route path="forecast" element={<DetailedForecastPage />} />
      </Routes>
    </div>
  );
}

export default App;
