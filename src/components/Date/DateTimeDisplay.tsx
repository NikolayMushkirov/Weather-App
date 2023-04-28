import React from "react";
import styles from "./DateTimeDisplay.module.scss";
type Props = {};

const DateTimeDisplay = (props: Props) => {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const day = days[new Date().getDay() - 1];
  const nowDate = new Date().toLocaleDateString();
  const hours = new Date().getHours().toString().padStart(2, '0')
  const minutes = new Date().getMinutes().toString().padStart(2, '0');

  return (
    <div className={styles["date-time-display"]}>
      <div className={styles["time-info"]}>
        {hours}:{minutes} AM
      </div>
      <div className={styles["date-info"]}>
        {day}, {nowDate}
      </div>
    </div>
  );
};

export default DateTimeDisplay;
