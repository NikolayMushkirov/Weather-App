import React from "react";
import {weatherIcons} from '../../assets/icons/icons.data'
type Props = {

}
// export interface Root {
//   weatherData: {
//     cod: string;
//     message: number;
//     cnt: number;
//     list: List[];
//     city: City;
//   };
// }

// export interface List {
//   dt: number;
//   main: Main;
//   weather: Weather[];
//   clouds: Clouds;
//   wind: Wind;
//   visibility: number;
//   pop: number;
//   sys: Sys;
//   dt_txt: string;
//   rain?: Rain;
// }

// export interface Main {
//   temp: number;
//   feels_like: number;
//   temp_min: number;
//   temp_max: number;
//   pressure: number;
//   sea_level: number;
//   grnd_level: number;
//   humidity: number;
//   temp_kf: number;
// }

// export interface Weather {
//   id: number;
//   main: string;
//   description: string;
//   icon: string;
// }

// export interface Clouds {
//   all: number;
// }

// export interface Wind {
//   speed: number;
//   deg: number;
//   gust: number;
// }

// export interface Sys {
//   pod: string;
// }

// export interface Rain {
//   "3h": number;
// }

// export interface City {
//   id: number;
//   name: string;
//   coord: Coord;
//   country: string;
//   population: number;
//   timezone: number;
//   sunrise: number;
//   sunset: number;
// }

// export interface Coord {
//   lat: number;
//   lon: number;
// }

import styles from "./WeatherCards.module.scss";

const WeatherCards: React.FC<Props> = ({ weatherData, sortedDataListArr, activeCardNumber }) => {
  return (
    <div className={styles["regular-weather-card"]}>
      <span className={styles["regular-city-name"]}>
        {weatherData && weatherData.city.name}
      </span>
      <img
        src={
          weatherData &&
          weatherIcons[sortedDataListArr[activeCardNumber].weather[0].main]
        }
        alt="anim-icon"
        className={styles["regular-icon"]}
      />
      <span className={styles["regular-date"]}>Today 27 april</span>
      <span className={styles["regular-degrees"]}>
        {sortedDataListArr && Math.round(sortedDataListArr[activeCardNumber].main.temp - 273)}&deg;
      </span>
      <div className={styles["regular-weather-condition-box"]}>
        <span className={styles["regular-weather-condition"]}>
          {sortedDataListArr && sortedDataListArr[activeCardNumber].weather[0].main}
        </span>
        <div className={styles["regular-wind-status-box"]}>
          <span className={styles["regular-wind-status"]}>Wind</span>
          <span className={styles["regular-wind-status-wind-speed"]}>
            {sortedDataListArr && sortedDataListArr[activeCardNumber].wind.speed} m/s
          </span>
        </div>
        <div className={styles["regular-humidity-status-box"]}>
          <span className={styles["regular-humidity-status"]}>Hum</span>
          <span className={styles["regular-humidity-status-percent"]}>
            {sortedDataListArr && sortedDataListArr[activeCardNumber].main.humidity} %
          </span>
        </div>
      </div>
    </div>
  );
};

export default WeatherCards;
