import { useWeatherStore } from "store/store";

import DateTimeDisplay from "components/DateTimeDisplay/DateTimeDisplay";
import SmallWeatherCard from "components/WeatherCards/SmallWeatherCard/SmallWeatherCard";
import SunriseAndSunset from "components/SunriseAndSunset/SunriseAndSunset";
import AirQuality from "components/AirQuality/AirQuality";
import SwitchButton from "components/SwitchButton/SwitchButton";

import styles from "./MainWidget.module.scss";

type Props = {
  switchTheme: () => void;
};

const MainWidget = ({ switchTheme }: Props) => {
  const {
    sortedWeatherDataList,
    activeCardNumber,
    changeActiveCard,
    getWeekDayName,
  } = useWeatherStore();

  console.log(sortedWeatherDataList, "sorted weather");
  return (
    <div className={styles["main-widget"]}>
      <div className={styles["date-time-and-switch-btn-box"]}>
        <DateTimeDisplay />
        <SwitchButton switchTheme={switchTheme} />
      </div>

      <div className={styles["small-cards-container"]}>
        {sortedWeatherDataList?.map((card, index) => (
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
        <AirQuality />
        <SunriseAndSunset />
      </div>
    </div>
  );
};

export default MainWidget;
