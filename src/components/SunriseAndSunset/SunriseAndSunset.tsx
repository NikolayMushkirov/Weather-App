import { useWeatherStore } from "../../store/store";

import Loader from "../Loader/Loader";

import clearDayIcon from "../../assets/icons/all/clear-day.svg";
import clearNightIcon from "../../assets/icons/all/clear-night.svg";
import styles from "./SunriseAndSunset.module.scss";


const SunriseAndSunset = () => {
  const { cityName, weatherData } = useWeatherStore();
  if (!weatherData) return <Loader />;

  const sunrise = new Date(weatherData.city.sunrise * 1000)
    .toLocaleString()
    .slice(12, 17);
  const sunset = new Date(weatherData.city.sunset * 1000)
    .toLocaleString()
    .slice(12, 17);

  return (
    <div className={styles["sunrise-and-sunset"]}>
      <h2 className={styles.title}>Sunrise & Sunset</h2>
      <div className={styles["info-card"]}>
        <span className={styles["info-card-city-name"]}>{cityName}</span>
        <div className={styles["info-card-wrapper"]}>
          <div className={styles["info-card-inner"]}>
            <img
              src={clearDayIcon}
              alt="clearDayIcon"
              className={styles["info-card-icon"]}
            />
            <div className={styles["info-card-box"]}>
              <span className={styles["info-card-subtitle"]}>Sunrise</span>
              <span className={styles["info-card-time"]}>{sunrise} AM</span>
            </div>
          </div>
          <div className={styles["info-card-inner"]}>
            <img
              src={clearNightIcon}
              alt="clearNightIcon"
              className={styles["info-card-icon"]}
            />
            <div className={styles["info-card-box"]}>
              <span className={styles["info-card-subtitle"]}>Sunset</span>
              <span className={styles["info-card-time"]}>{sunset} PM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SunriseAndSunset;
