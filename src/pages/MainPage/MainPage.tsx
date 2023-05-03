import React from "react";
import styles from "./MainPage.module.scss";
import DateTimeDisplay from "../../components/DateTimeDisplay/DateTimeDisplay";
import SmallWeatherCard from "../../components/WeatherCards/SmallWeatherCard/SmallWeatherCard";
import SunriseAndSunset from "../../components/SunriseAndSunset/SunriseAndSunset";
type Props = {};

const MainPage = ({ sortedDataListArr, changeActiveCard }: Props) => {
  console.log(sortedDataListArr, "sorted arr");

  return (
    <div className={styles["main-page"]}>
      <DateTimeDisplay />
      <div className={styles["small-cards-container"]}>
        {sortedDataListArr &&
          sortedDataListArr.map((card, index) => (
            <SmallWeatherCard
              key={index}
              id = {index}
              dayName={new Date(card.dt_txt).toLocaleDateString("en-US", {
                weekday: "long",
              })}
              temp={sortedDataListArr && Math.round(card.main.temp - 273)}
              weatherStatus={card.weather[0].main}
              changeActiveCard = {changeActiveCard}
            />
          ))}
      </div>
      <SunriseAndSunset />
    </div>
  );
};

export default MainPage;
