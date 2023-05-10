import styles from "./Loader.module.scss";


const Loader = () => {
  return (
    <div className={styles["loader-container"]}>
      <div className={styles.loader}></div>
      <p>Loading weather data...</p>
    </div>
  );
};

export default Loader;
