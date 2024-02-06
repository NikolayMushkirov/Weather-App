import { useWeatherStore } from "store/store";

import useWeatherData from "hooks/useWeatherData";

import DateTimeDisplay from "components/DateTimeDisplay/DateTimeDisplay";
import SmallWeatherCard from "components/WeatherCards/SmallWeatherCard/SmallWeatherCard";
import SunriseAndSunset from "components/SunriseAndSunset/SunriseAndSunset";
import AirQuality from "components/AirQuality/AirQuality";
import SwitchButton from "components/SwitchButton/SwitchButton";
import ForecastModal from "components/ForecastModal/ForecastModal";

import styles from "./MainWidget.module.scss";

const MainWidget = () => {
  const {
    activeCardNumber,
    changeActiveCard,
    getWeekDayName,
    modalIsOpen,
    handleOpenModal,
    handleCloseModal,
  } = useWeatherStore();

  const { data, sortedWeatherData } = useWeatherData();

  if (!sortedWeatherData || !data) {
    return null;
  }

  const cityName = data?.forecastData?.city.name;
  const activeCardDateInfo = sortedWeatherData[activeCardNumber].dt_txt
    .toString()
    .slice(0, 10);

  return (
    <div className={styles["main-widget"]}>
      <ForecastModal
        modalIsOpen={modalIsOpen}
        forecastData={data?.forecastData}
        activeCardDateInfo={activeCardDateInfo}
        cityName={cityName}
        getWeekDayName={getWeekDayName}
        handleCloseModal={handleCloseModal}
      />
      <div className={styles["date-time-and-switch-btn-box"]}>
        <DateTimeDisplay />
        <SwitchButton />
      </div>

      <div className={styles["small-cards-container"]}>
        {sortedWeatherData?.map((card: List, index: number) => (
          <SmallWeatherCard
            key={index}
            id={index.toString()}
            dayName={getWeekDayName(card.dt_txt)}
            temp={Math.round(card.main.temp)}
            weatherStatus={card.weather[0].main}
            activeCardNumber={activeCardNumber}
            changeActiveCard={changeActiveCard}
            handleOpenModal={handleOpenModal}
          />
        ))}
      </div>
      <div className={styles["main-widget-box"]}>
        <AirQuality
          sortedWeatherData={sortedWeatherData}
          airQualData={data?.airData}
          cityName={cityName}
        />
        <SunriseAndSunset
          forecastData={data?.forecastData}
          cityName={cityName}
        />
      </div>
    </div>
  );
};

export default MainWidget;
