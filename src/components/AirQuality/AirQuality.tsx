
import { useWeatherStore } from "../../store/store";
import styles from "./AirQuality.module.scss";

const AirQuality = () => {
  const {
    airQualData,
    sortedWeatherDataList,
    activeCardNumber,
    cityName,
  } = useWeatherStore();

  const sortedAirQualList =
    sortedWeatherDataList &&
    airQualData.list.filter((airObj) => {
      return sortedWeatherDataList.some((dataObj) => airObj.dt === dataObj.dt);
    });

  let aqi =
    sortedAirQualList &&
    sortedAirQualList[activeCardNumber <= 3 ? activeCardNumber : 3].main.aqi;
  let airStatus = "";

  if (aqi >= 0 && aqi <= 50) airStatus += "Good";
  if (aqi > 50 && aqi <= 100) airStatus += "Moderate";
  if (aqi > 100 && aqi <= 150) airStatus += "Unhealthy for Sensitive Groups";
  if (aqi > 150 && aqi <= 200) airStatus += "Unhealthy";
  if (aqi > 200 && aqi <= 300) airStatus += "Very Unhealthy";
  if (aqi > 300 && aqi <= 500) airStatus += "Hazardous";

  console.log(airQualData, 'air data');

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
          Object.entries(
            sortedAirQualList[activeCardNumber <= 3 ? activeCardNumber : 3]
              .components
          ).map(([name, value]) => (
            <div className={styles.component} key={name}>
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
