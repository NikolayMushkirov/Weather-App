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

  const cityName = weatherData && weatherData.city.name;
  return (
    <div className={styles["aside-widget"]}>
      <SearchForm setSearchValue={setSearchValue} />
      <RegularWeatherCard
        cityName={cityName}
        sortedWeatherDataList={sortedWeatherDataList}
        activeCardNumber={activeCardNumber}
        getWeekDayName={getWeekDayName}
      />
    </div>
  );
};

export default AsideWidget;
