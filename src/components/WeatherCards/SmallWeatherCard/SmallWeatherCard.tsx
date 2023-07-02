import { weatherIcons } from "assets/icons/icons.data";

import styles from "./SmallWeatherCard.module.scss";

type Props = Partial<WeatherStore> & {
  dayName: string;
  id: string;
  temp: number;
  weatherStatus: string;
};

const SmallWeatherCard = ({
  dayName,
  temp,
  weatherStatus,
  changeActiveCard,
  id,
  activeCardNumber,
}: Props) => {
  return (
    <div
      onClick={changeActiveCard}
      id={id}
      className={
        activeCardNumber === Number(id)
          ? `${styles["small-card"]} ${styles["small-card-active"]} }`
          : styles["small-card"]
      }
    >
      <img
        src={weatherIcons[weatherStatus]}
        alt=""
        id={id}
        className={styles["small-card-icon"]}
      />
      <span id={id} className={styles["small-card-day"]}>
        {dayName}
      </span>
      <span id={id} className={styles["small-card-degree"]}>
        {temp}&deg;
      </span>

    </div>
  );
};

export default SmallWeatherCard;
