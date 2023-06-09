import { Link } from "react-router-dom";

import { weatherIcons } from "assets/icons/icons.data";

import styles from "./RegularWeatherCard.module.scss";

type Props = {
  cityName: string;
  weekDayName: string;
  temp: number;
  date: string;
  condition: string;
  windSpeed: number;
  humidity: number;
};

const RegularWeatherCard = ({
  cityName,
  weekDayName,
  temp,
  date,
  condition,
  windSpeed,
  humidity,
}: Props) => {
  return (
    <div className={styles["regular-weather-card"]}>
      <div className={styles["regular-card-title-box"]}>
        <span className={styles["regular-city-name"]}>
          {cityName.toString()}
        </span>
        <Link to={"forecast"} className={styles["full-forecast"]}>
        Full Forecast
        </Link>
      </div>
      <img
        src={weatherIcons[condition]}
        alt="anim-icon"
        className={styles["regular-icon"]}
      />
      <span className={styles["regular-day-name"]}>{weekDayName}</span>
      <span className={styles["regular-date"]}>{date}</span>
      <span className={styles["regular-degrees"]}>
        {Math.round(temp)}
        &deg;
      </span>
      <div className={styles["regular-weather-condition-box"]}>
        <span className={styles["regular-weather-condition"]}>{condition}</span>
        <div className={styles["regular-wind-status-box"]}>
          <span className={styles["regular-wind-status"]}>Wind</span>
          <span className={styles["regular-wind-status-wind-speed"]}>
            {windSpeed} m/s
          </span>
        </div>
        <div className={styles["regular-humidity-status-box"]}>
          <span className={styles["regular-humidity-status"]}>Hum</span>
          <span className={styles["regular-humidity-status-percent"]}>
            {humidity} %
          </span>
        </div>
      </div>
    </div>
  );
};

export default RegularWeatherCard;
