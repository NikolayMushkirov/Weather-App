import DetailedWeatherCard from "components/WeatherCards/DetailedWeatherCard/DetailedWeatherCard";

import Modal from "react-modal";

import styles from "./ForecastModal.module.scss";
import CloseModalButton from "components/Buttons/CloseModalButton/CloseModalButton";
type Props = {
  forecastData: WeatherData | undefined;
  modalIsOpen: boolean;
  activeCardDateInfo: string;
  cityName?: string;
  getWeekDayName: GetWeekDayName;
  handleCloseModal: () => void;
};

const ForecastModal = ({
  forecastData,
  modalIsOpen,
  activeCardDateInfo,
  cityName,
  getWeekDayName,
  handleCloseModal,
}: Props) => {
  const sortedForecastData = forecastData?.list.filter((item: List) => {
    return item.dt_txt.toString().slice(0, 10) === activeCardDateInfo;
  });

  return (
    <Modal isOpen={modalIsOpen} className={styles.modal}>
      {sortedForecastData?.map((card: List, index: number) => (
        <DetailedWeatherCard
          key={index}
          timestamp={card.dt}
          cityName={cityName}
          dateTextFormat={card.dt_txt}
          temp={card.main.temp}
          feelsLikeTemp={card.main.feels_like}
          pressure={card.main.pressure}
          condition={card.weather[0].main}
          windSpeed={card.wind.speed}
          humidity={card.main.humidity}
          weekDayName={getWeekDayName(card.dt_txt)}
        />
      ))}
      <div className={styles['modal-button-container']}>
        <CloseModalButton handleCloseModal={handleCloseModal} />
      </div>
    </Modal>
  );
};

export default ForecastModal;
