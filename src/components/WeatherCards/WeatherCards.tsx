import React from "react";
import { weatherIcons } from "../../assets/icons/icons.data";
type Props = {};

import styles from "./WeatherCards.module.scss";
import Loader from "../Loader/Loader";

const WeatherCards: React.FC<Props> = ({
  cityName,
  sortedWeatherDataList,
  activeCardNumber,
  getWeekDayName,
}) => {
  if(!sortedWeatherDataList) {
    return <Loader/>
  }

  const date = new Date(
    sortedWeatherDataList[activeCardNumber].dt * 1000
  ).toLocaleDateString();

  return (
    <div className={styles["regular-weather-card"]}>
      <span className={styles["regular-city-name"]}>{cityName}</span>
      <img
        src={weatherIcons[sortedWeatherDataList[activeCardNumber].weather[0].main]}
        alt="anim-icon"
        className={styles["regular-icon"]}
      />
      <span className={styles["regular-day-name"]}>
        {getWeekDayName(sortedWeatherDataList[activeCardNumber].dt_txt)}
      </span>
      <span className={styles["regular-date"]}>{date}</span>
      <span className={styles["regular-degrees"]}>
        {Math.round(sortedWeatherDataList[activeCardNumber].main.temp - 273)}
        &deg;
      </span>
      <div className={styles["regular-weather-condition-box"]}>
        <span className={styles["regular-weather-condition"]}>
          {sortedWeatherDataList[activeCardNumber].weather[0].main}
        </span>
        <div className={styles["regular-wind-status-box"]}>
          <span className={styles["regular-wind-status"]}>Wind</span>
          <span className={styles["regular-wind-status-wind-speed"]}>
            {sortedWeatherDataList[activeCardNumber].wind.speed} m/s
          </span>
        </div>
        <div className={styles["regular-humidity-status-box"]}>
          <span className={styles["regular-humidity-status"]}>Hum</span>
          <span className={styles["regular-humidity-status-percent"]}>
            {sortedWeatherDataList[activeCardNumber].main.humidity} %
          </span>
        </div>
      </div>
    </div>
  );
};

export default WeatherCards;
