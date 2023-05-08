import React from "react";
import styles from "./AirQuality.module.scss";
import { useQuery } from "@tanstack/react-query";
import { useWeatherStore } from "../../store/store";
type Props = {};

const AirQuality = (props: Props) => {
  const { weatherData, airQualData, sortedWeatherDataList, activeCardNumber ,cityName} =
    useWeatherStore();

  let activeAirCardNumber = activeCardNumber;

  const sortedAirQualList =
    sortedWeatherDataList &&
    airQualData.list.filter((dataObj) => {
      return sortedWeatherDataList.some((airObj) => airObj.dt === dataObj.dt);
    });


  let aqi = null
  if (sortedAirQualList && sortedAirQualList.length > 0 && activeAirCardNumber >= 0 && activeAirCardNumber < sortedAirQualList.length) {
    aqi = sortedAirQualList[activeAirCardNumber > 4 ? 4 : activeAirCardNumber]?.main?.aqi;
  }
  let airStatus = "";
  console.log(aqi, "aqi");

  if (aqi >= 0 && aqi <= 50) airStatus += "Good";
  if (aqi > 50 && aqi <= 100) airStatus += "Moderate";
  if (aqi > 100 && aqi <= 150) airStatus += "Unhealthy for Sensitive Groups";
  if (aqi > 150 && aqi <= 200) airStatus += "Unhealthy";
  if (aqi > 200 && aqi <= 300) airStatus += "Very Unhealthy";
  if (aqi > 300 && aqi <= 500) airStatus += "Hazardous";

  console.log(sortedAirQualList, "sorted air");
  console.log(airStatus, "sorted air status");

  return (
    <div className={styles["air-quality"]}>
      <div className={styles["title-box"]}>
        <h2 className={styles.title}>Air Quality Index</h2>
        <span className={styles["city-name"]}>{cityName}</span>
      </div>
      <div className={styles["air-quality-status"]}>
        <div className={styles["status-box"]}>
          <span className={styles.status}>{airStatus}</span>
        </div>
        <div className={styles["refresh-btn"]}>Refresh</div>
      </div>
      <div className={styles["components-box"]}>
        {sortedAirQualList &&
          Object.entries(sortedAirQualList[activeCardNumber].components).map(
            ([name, value]) => (
              <div className={styles.component} key={name}>
                <span className={styles["component-quantity"]}>
                  {value.toFixed(1)}
                </span>
                <span className={styles["component-name"]}>{name}</span>
              </div>
            )
          )}
      </div>
    </div>
  );
};

export default AirQuality;
