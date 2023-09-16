import { useWeatherStore } from "store/store";

import ForecastWeatherCard from "components/WeatherCards/ForecastWeatherCard/DetailedForecastCard";

import styles from "./DetailedForecastPage.module.scss";
import useWeatherData from "hooks/useWeatherData";

const DetailedForecastPage = () => {
  const { getWeekDayName, activeCardNumber } = useWeatherStore();

  const { data, sortedWeatherData } = useWeatherData();

  const sortedForecastData = data?.forecastData?.list.filter((item: List) => {
    return (
      item.dt_txt.toString().slice(0, 10) ===
      sortedWeatherData[activeCardNumber].dt_txt.toString().slice(0, 10)
    );
  });

  return (
    <div className={styles["detailed-forecast-page"]}>
      {sortedForecastData?.map((card: List, index: number) => (
        <ForecastWeatherCard
          key={index}
          timestamp={card.dt}
          cityName={data?.forecastData?.city.name}
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
