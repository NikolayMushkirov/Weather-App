import "./App.scss";
import DateTimeDisplay from "./components/Date/DateTimeDisplay";
import SunriseAndSunset from "./components/SunriseAndSunset/SunriseAndSunset";
import SmallWeatherCard from "./components/WeatherCards/SmallWeatherCard/SmallWeatherCard";
import WeatherCards from "./components/WeatherCards/WeatherCards";


function App() {
  return (
    <div className="App">
          <DateTimeDisplay/>
          <WeatherCards/>
          <SmallWeatherCard/>
          <SunriseAndSunset/>
    </div>
  );
}

export default App;
