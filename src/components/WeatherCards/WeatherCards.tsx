import Loader from "../Loader/Loader";

import { weatherIcons } from "../../assets/icons/icons.data";

import styles from "./WeatherCards.module.scss";

type Props =  {
  cityName: string;
  sortedWeatherDataList: List[];
  activeCardNumber: number;
  getWeekDayName: (dt_txt: string | Date) => string;
}

const WeatherCards = ({
  cityName,
  sortedWeatherDataList,
  activeCardNumber,
  getWeekDayName,
}:  Props) => {
  if (!sortedWeatherDataList) {
    return <Loader />;
  }

  const date = new Date(
    sortedWeatherDataList[activeCardNumber].dt * 1000
  ).toLocaleDateString();

  return (
    <div className={styles["regular-weather-card"]}>
      <span className={styles["regular-city-name"]}>{cityName.toString()}</span>
      <img
        src={
          weatherIcons[sortedWeatherDataList[activeCardNumber].weather[0].main]
        }
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
