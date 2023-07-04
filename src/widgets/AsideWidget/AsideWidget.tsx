import { useWeatherStore } from "store/store";

import SearchForm from "components/SearchForm/SearchForm";
import RegularWeatherCard from "components/WeatherCards/RegularWeatherCard/RegularWeatherCard";

import styles from "./AsideWidget.module.scss";

const AsideWidget = () => {
  const {
    setSearchValue,
    sortedWeatherDataList,
    activeCardNumber,
    getWeekDayName,
    weatherData,
  } = useWeatherStore();

  return (
    <div className={styles["aside-widget"]}>
      <SearchForm setSearchValue={setSearchValue} />
      <RegularWeatherCard
        cityName={weatherData?.city.name}
        weekDayName={getWeekDayName(
          sortedWeatherDataList[activeCardNumber].dt_txt
        )}
        date={new Date(
          sortedWeatherDataList[activeCardNumber].dt * 1000
        ).toLocaleDateString()}
        temp={sortedWeatherDataList[activeCardNumber].main.temp}
        condition={sortedWeatherDataList[activeCardNumber].weather[0].main}
        windSpeed={sortedWeatherDataList[activeCardNumber].wind.speed}
        humidity={sortedWeatherDataList[activeCardNumber].main.humidity}
      />
    </div>
  );
};

export default AsideWidget;
