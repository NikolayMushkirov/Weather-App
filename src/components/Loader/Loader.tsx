import React from "react";
import styles from "./Loader.module.scss";
type Props = {};

const Loader = (props: Props) => {
  return (
    <div className={styles["loader-container"]}>
      <div className={styles.loader}></div>
      <p>Loading weather data...</p>
    </div>
  );
};

export default Loader;
