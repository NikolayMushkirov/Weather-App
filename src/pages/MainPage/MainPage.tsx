
import { useWeatherStore } from "../../store/store";

import DateTimeDisplay from "../../components/DateTimeDisplay/DateTimeDisplay";
import SmallWeatherCard from "../../components/WeatherCards/SmallWeatherCard/SmallWeatherCard";
import SunriseAndSunset from "../../components/SunriseAndSunset/SunriseAndSunset";
import AirQuality from "../../components/AirQuality/AirQuality";

import styles from "./MainPage.module.scss";

const MainPage = () => {
  const {
    sortedWeatherDataList,
    activeCardNumber,
    changeActiveCard,
    getWeekDayName,
  } = useWeatherStore();
  console.log(sortedWeatherDataList, "sorted weather");
  return (
    <div className={styles["main-page"]}>
      <DateTimeDisplay />
      <div className={styles["small-cards-container"]}>
        {sortedWeatherDataList &&
          sortedWeatherDataList.map((card, index) => (
            <SmallWeatherCard
              key={index}
              id={index.toString()}
              dayName={getWeekDayName(card.dt_txt)}
              temp={Math.round(card.main.temp - 273)}
              weatherStatus={card.weather[0].main}
              activeCardNumber={activeCardNumber}
              changeActiveCard={changeActiveCard}
            />
          ))}
      </div>
      <AirQuality/>
      <SunriseAndSunset />
    </div>
  );
};

export default MainPage;
