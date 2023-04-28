import React from "react";
import styles from "./SunriseAndSunset.module.scss";
type Props = {};

const SunriseAndSunset = (props: Props) => {
  return (
    <div className={styles["sunrise-and-sunset"]}>
      <div className={styles["info-card"]}>
        <span className={styles["info-card-city-name"]}>Irkutsk</span>
        <div className={styles["info-card-wrapper"]}>
          <div className={styles["info-card-inner"]}>
            <img src="" alt="" className={styles["info-card-icon"]} />
            <div className={styles["sunrise-box"]}>
              <span className={styles["sunrise-title"]}>Sunrise</span>
              <span className={styles["sunrise-time"]}>4:40 AM</span>
            </div>
          </div>
          <div className={styles["info-card-inner"]}>
            <img src="" alt="" className={styles["info-card-icon"]} />
            <div className={styles["sunset-box"]}>
              <span className={styles["sunset-title"]}>Sunset</span>
              <span className={styles["sunset-time"]}>6:53 PM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SunriseAndSunset;
