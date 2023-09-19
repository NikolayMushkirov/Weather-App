import { useWeatherStore } from "store/store";

import DateTimeDisplay from "components/DateTimeDisplay/DateTimeDisplay";
import SmallWeatherCard from "components/WeatherCards/SmallWeatherCard/SmallWeatherCard";
import SunriseAndSunset from "components/SunriseAndSunset/SunriseAndSunset";
import AirQuality from "components/AirQuality/AirQuality";
import SwitchButton from "components/SwitchButton/SwitchButton";

import styles from "./MainWidget.module.scss";
import useWeatherData from "hooks/useWeatherData";



const MainWidget = () => {
  const { activeCardNumber, changeActiveCard, getWeekDayName } =
    useWeatherStore();

  const { sortedWeatherData, data } = useWeatherData();

  const cityName = data?.forecastData?.city.name;

  return (
    <div className={styles["main-widget"]}>
      <div className={styles["date-time-and-switch-btn-box"]}>
        <DateTimeDisplay />
        <SwitchButton  />
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
          />
        ))}
      </div>
      <div className={styles["main-widget-box"]}>
        <AirQuality
          sortedWeatherData={sortedWeatherData}
          airQualData={data?.airData}
          cityName = {cityName}
        />
        <SunriseAndSunset forecastData = {data?.forecastData} />
      </div>
    </div>
  );
};

export default MainWidget;
