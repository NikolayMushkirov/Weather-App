import React from "react";
import animSunnyIcon from "../../assets/icons/animated/clear-day.svg";

type Props = {};
import styles from "./WeatherCards.module.scss";
const WeatherCards = (props: Props) => {
  return (
    <div className={styles["regular-weather-card"]}>
      <span className={styles["regular-city-name"]}>Irkutsk</span>
      <img
        src={animSunnyIcon}
        alt="anim-icon"
        className={styles["regular-icon"]}
      />
      <span className={styles["regular-date"]}>Today 27 april</span>
      <span className={styles["regular-degrees"]}>29&deg;</span>
      <div className={styles["regular-weather-condition-box"]}>
        <span className={styles["regular-weather-condition"]}>Sunny</span>
        <div className={styles["regular-wind-status-box"]}>
          <span className={styles["regular-wind-status"]}>Wind</span>
          <span className={styles["regular-wind-status-wind-speed"]}>
            19 km/h
          </span>
        </div>
        <div className={styles["regular-humidity-status-box"]}>
          <span className={styles["regular-humidity-status"]}>Hum</span>
          <span className={styles["regular-humidity-status-percent"]}>
            22%
          </span>
        </div>

      </div>
    </div>
  );
};

export default WeatherCards;
