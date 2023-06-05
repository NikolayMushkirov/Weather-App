import { motion } from "framer-motion"

import { weatherIcons } from "../../../assets/icons/icons.data";
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
    <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}

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
    </motion.div>
  );
};

export default SmallWeatherCard;
