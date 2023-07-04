import { useWeatherStore } from "store/store";

import ForecastWeatherCard from "components/WeatherCards/ForecastWeatherCard/DetailedForecastCard";

import styles from "./DetailedForecastPage.module.scss";

const DetailedForecastPage = () => {
  const {
    weatherData,
    getWeekDayName,
    activeCardNumber,
    sortedWeatherDataList,
  } = useWeatherStore();

  const sortedForecastData = weatherData?.list.filter((item) => {
    return (
      item.dt_txt.toString().slice(0, 10) ===
      sortedWeatherDataList[activeCardNumber].dt_txt.toString().slice(0, 10)
    );
  });

  return (
    <div className={styles["weather-forecast-page"]}>
      {sortedForecastData?.map((card, index) => (
        <ForecastWeatherCard
          key={index}
          timestamp={card.dt}
          cityName={weatherData?.city.name}
          dateTextFormat={card.dt_txt}
          temp={card.main.temp}
          feelsLikeTemp={card.main.feels_like}
          pressure={card.main.pressure}
          condition={card.weather[0].main}
          windSpeed={card.wind.speed}
          humidity={card.main.humidity}
          weekDayName={getWeekDayName(card.dt_txt)}
        />
      ))}
    </div>
  );
};

export default DetailedForecastPage;
