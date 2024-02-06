import { weatherIcons } from "assets/icons/icons.data";

import styles from "./SmallWeatherCard.module.scss";

type Props = {
  dayName: string;
  id: string;
  temp: number;
  weatherStatus: string;
  handleOpenModal: () => void;
  changeActiveCard: (e: React.MouseEvent<HTMLDivElement>) => void;
  activeCardNumber: number;
};

const SmallWeatherCard = ({
  dayName,
  temp,
  weatherStatus,
  changeActiveCard,
  id,
  activeCardNumber,
  handleOpenModal,
}: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (activeCardNumber === Number(e.currentTarget.id)) {
      handleOpenModal();
    } else {
      changeActiveCard(e);
    }
  };

  return (
    <div
      onClick={handleClick}
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
