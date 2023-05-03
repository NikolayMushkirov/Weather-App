import React from "react";
import clearDayIcon from '../../assets/icons/clear-day.svg'
import clearNightIcon from '../../assets/icons/clear-night.svg'
import styles from "./SunriseAndSunset.module.scss";
type Props = {};

const SunriseAndSunset = (props: Props) => {
  return (
    <div className={styles["sunrise-and-sunset"]}>
        <h2 className={styles.title}>Sunrise & Sunset</h2>
      <div className={styles["info-card"]}>
        <span className={styles["info-card-city-name"]}>Irkutsk</span>
        <div className={styles["info-card-wrapper"]}>
          <div className={styles["info-card-inner"]}>
            <img src={clearDayIcon} alt="clearDayIcon" className={styles["info-card-icon"]} />
            <div className={styles["info-card-box"]}>
              <span className={styles["info-card-subtitle"]}>Sunrise</span>
              <span className={styles["info-card-time"]}>4:40 AM</span>
            </div>
          </div>
          <div className={styles["info-card-inner"]}>
            <img src={clearNightIcon} alt="clearNightIcon" className={styles["info-card-icon"]} />
            <div className={styles["info-card-box"]}>
              <span className={styles["info-card-subtitle"]}>Sunset</span>
              <span className={styles["info-card-time"]}>6:53 PM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SunriseAndSunset;
