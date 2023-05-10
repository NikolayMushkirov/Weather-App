import { useWeatherStore } from "../../store/store";

import WeatherCards from "../../components/WeatherCards/WeatherCards";
import SearchForm from "../../components/SearchForm/SearchForm";

import styles from "./AsidePage.module.scss";

const AsidePage = () => {
  const {
    setSearchValue,
    sortedWeatherDataList,
    activeCardNumber,
    getWeekDayName,
    cityName,
    weatherData,
  } = useWeatherStore();
  console.log(weatherData, "weather data");
  return (
    <div className={styles["aside-page"]}>
      <SearchForm setSearchValue={setSearchValue} />
      <WeatherCards
        cityName={cityName}
        sortedWeatherDataList={sortedWeatherDataList}
        activeCardNumber={activeCardNumber}
        getWeekDayName={getWeekDayName}
      />
    </div>
  );
};

export default AsidePage;
