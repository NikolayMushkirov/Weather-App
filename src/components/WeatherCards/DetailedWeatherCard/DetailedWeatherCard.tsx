import { weatherIcons } from "assets/icons/icons.data";

import windIcon from "assets/icons/wind-icon.svg";
import humidityIcon from "assets/icons/drop-icon.svg";
import pressureIcon from "assets/icons/pressure.svg";

import styles from "./DetailedWeatherCard.module.scss";

type Props = {
  cityName: string;
  dateTextFormat: Date;
  temp: number;
  condition: string;
  windSpeed: number;
  humidity: number;
  timestamp: number;
  feelsLikeTemp: number;
  pressure: number;
  weekDayName: string;
};

const DetailedWeatherCard = ({
  cityName,
  dateTextFormat,
  temp,
  condition,
  windSpeed,
  humidity,
  feelsLikeTemp,
  pressure,
  weekDayName,
}: Props) => {
  const date = dateTextFormat
    .toString()
    .slice(0, 10)
    .split("-")
    .reverse()
    .join(".");
  const time = dateTextFormat.toString().slice(11, 16);

  return (
    <div className={styles["forecast-weather-card"]}>
      <span className={styles["forecast-city-name"]}>{cityName}</span>
      <img
        src={weatherIcons[condition]}
        alt="anim-icon"
        className={styles["forecast-icon"]}
      />
      <span className={styles["forecast-day-name"]}>{weekDayName}</span>
      <span className={styles["forecast-time"]}>{time}</span>
      <span className={styles["forecast-date"]}>{date}</span>
      <span className={styles["forecast-degrees"]}>
        {Math.round(temp)}
        &deg;
      </span>
      <span className={styles["forecast-feels-like"]}>
        Feels Like
        <span className={styles["forecast-feels-like-degrees"]}>
          {Math.round(feelsLikeTemp)}
          &deg;
        </span>
      </span>
      <div className={styles["forecast-weather-condition-box"]}>
        <span className={styles["forecast-weather-condition"]}>
          {condition}
        </span>
        <div className={styles["forecast-pressure-box"]}>
          <div className={styles["forecast-icon-box"]}>
            <img
              className={styles["forecast-pressure-icon"]}
              src={pressureIcon}
            />
            <span className={styles["forecast-pressure-status"]}>Pressure</span>
            <span>:</span>
            <span className={styles["forecast-pressure-status-value"]}>
              {pressure} mb
            </span>
          </div>
        </div>
        <div className={styles["forecast-wind-status-box"]}>
          <div className={styles["forecast-icon-box"]}>
            <img className={styles["forecast-wind-icon"]} src={windIcon} />
            <span className={styles["forecast-wind-status"]}>Wind</span>
            <span>:</span>
          </div>
          <span className={styles["forecast-wind-status-value"]}>
            {windSpeed} m/s
          </span>
        </div>
        <div className={styles["forecast-humidity-status-box"]}>
          <div className={styles["forecast-icon-box"]}>
            <img
              className={styles["forecast-humidity-icon"]}
              src={humidityIcon}
            />
            <span className={styles["forecast-humidity-status"]}>Hum</span>
            <span>:</span>
          </div>
          <span className={styles["forecast-humidity-status-value"]}>
            {humidity} %
          </span>
        </div>
      </div>
    </div>
  );
};

export default DetailedWeatherCard;
