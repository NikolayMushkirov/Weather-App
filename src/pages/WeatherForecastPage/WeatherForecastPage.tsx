import SmallWeatherCard from "components/WeatherCards/SmallWeatherCard/SmallWeatherCard";
import { useWeatherStore } from "store/store";
import { weatherIcons } from "assets/icons/icons.data";



import styles from "./WeatherForecastPage.module.scss";
import ForecastWeatherCard from "components/WeatherCards/ForecastWeatherCard/ForecastWeatherCard";

const WeatherForecastPage = () => {
  const { weatherData, getWeekDayName, activeCardNumber } = useWeatherStore();

  console.log(weatherData, "weather data");
  const cityName = weatherData && weatherData.city.name;
  return (
    <div className={styles["weather-forecast-page"]}>
      {weatherData.list.map((card, index) => (
        <ForecastWeatherCard
          key={index}
          cityName={cityName}
          weatherData={weatherData}
          activeCardNumber={activeCardNumber}
          getWeekDayName={getWeekDayName}
        />
      ))}
    </div>
  );
};

export default WeatherForecastPage;
