import { useWeatherStore } from "store/store";

import styles from "./AirQuality.module.scss";

type Props = {
  sortedWeatherData: List[];
  airQualData: AirQualityData;
  cityName: string;
};

const AirQuality = ({ sortedWeatherData, airQualData, cityName }: Props) => {
  const { activeCardNumber } = useWeatherStore();

  const weatherDataMap = new Map();

  sortedWeatherData?.forEach((dataObj) => {
    weatherDataMap.set(dataObj.dt, true);
  });

  const sortedAirQualList = (airQualData?.list || []).filter((airObj) =>
    weatherDataMap.has(airObj.dt),
  );

  const aqi =
    sortedAirQualList.length &&
    sortedAirQualList[
      activeCardNumber <= sortedAirQualList.length - 1
        ? activeCardNumber
        : sortedAirQualList.length - 1
    ].main.aqi;

  let airStatus = "";

  if (aqi === 1) airStatus += "Very Good";
  if (aqi === 2) airStatus += "Good";
  if (aqi === 3) airStatus += "Moderate";
  if (aqi === 4) airStatus += "Unhealthy";
  if (aqi === 5) airStatus += "Very Unhealthy";

  function getAirQualityColor(aqi: number) {
    const hueGreen = 120;
    const hueRed = 0;
    const hue = ((1 - aqi / 5) * (hueGreen - hueRed) + hueRed) / 360;

    return `hsl(${hue * 360}, 90%, 40%)`;
  }

  return (
    <div className={styles["air-quality"]}>
      <div className={styles["title-box"]}>
        <h2 className={styles.title}>Air Quality Index</h2>
        <span className={styles["city-name"]}>{cityName}</span>
      </div>
      <div className={styles["air-quality-status"]}>
        <div className={styles["status-box"]}>
          <span
            className={styles.status}
            style={{ color: getAirQualityColor(aqi) }}
          >
            {airStatus}
          </span>
        </div>
      </div>
      <div className={styles["components-box"]}>
        {sortedAirQualList.length &&
          Object.entries(
            sortedAirQualList[
              activeCardNumber <= sortedAirQualList.length - 1
                ? activeCardNumber
                : sortedAirQualList.length - 1
            ].components,
          ).map(([name, value]) => (
            <div
              style={{
                backgroundColor: getAirQualityColor(aqi),
              }}
              className={styles.component}
              key={name}
            >
              <span className={styles["component-quantity"]}>
                {value.toFixed(1)}
              </span>
              <span className={styles["component-name"]}>{name}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AirQuality;
