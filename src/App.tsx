import MainPage from "pages/MainPage/MainPage";
import GetWeatherData from "api/GetWeatherData";

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
