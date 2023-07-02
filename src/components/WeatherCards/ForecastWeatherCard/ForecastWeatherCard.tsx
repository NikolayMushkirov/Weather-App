import { weatherIcons } from "assets/icons/icons.data";

import styles from "./forecastWeatherCard.module.scss";

type Props = {
  cityName: string;
  weatherData?: WeatherData;
  activeCardNumber: number;
  getWeekDayName: (dt_txt: string | Date) => string;
};

const ForecastWeatherCard = ({
  cityName,
  weatherData,
  activeCardNumber,
  getWeekDayName,
}: Props) => {
  if (!weatherData?.list?.length) {
    return null;
  }

  const date = new Date(
    weatherData.list[activeCardNumber].dt * 1000
  ).toLocaleDateString();

  return (
    <div className={styles["forecast-weather-card"]}>
      <div className={styles["forecast-card-title-box"]}>
        <span className={styles["forecast-city-name"]}>
          {cityName.toString()}
        </span>
      </div>
      <img
        src={
          weatherIcons[weatherData.list[activeCardNumber].weather[0].main]
        }
        alt="anim-icon"
        className={styles["forecast-icon"]}
      />
      <span className={styles["forecast-day-name"]}>
        {getWeekDayName(weatherData.list[activeCardNumber].dt_txt)}
      </span>
      <span className={styles["forecast-date"]}>{date}</span>
      <span className={styles["forecast-degrees"]}>
        {Math.round(weatherData.list[activeCardNumber].main.temp)}
        &deg;
      </span>
      <div className={styles["forecast-weather-condition-box"]}>
        <span className={styles["forecast-weather-condition"]}>
          {weatherData.list[activeCardNumber].weather[0].main}
        </span>
        <div className={styles["forecast-wind-status-box"]}>
          <span className={styles["forecast-wind-status"]}>Wind</span>
          <span className={styles["forecast-wind-status-wind-speed"]}>
            {weatherData.list[activeCardNumber].wind.speed} m/s
          </span>
        </div>
        <div className={styles["forecast-humidity-status-box"]}>
          <span className={styles["forecast-humidity-status"]}>Hum</span>
          <span className={styles["forecast-humidity-status-percent"]}>
            {weatherData.list[activeCardNumber].main.humidity} %
          </span>
        </div>
      </div>
    </div>
  );
};

export default ForecastWeatherCard;
