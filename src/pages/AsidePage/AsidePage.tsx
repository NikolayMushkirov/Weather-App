import React from "react";
import styles from "./AsidePage.module.scss";
import WeatherCards from "../../components/WeatherCards/WeatherCards";
import SearchForm from "../../components/SearchForm/SearchForm";
import { useWeatherStore } from "../../store/store";
type Props = {

};

const AsidePage: React.FC<Props> = ({



}) => {
  const {
    setSearchValue,
    sortedWeatherDataList,
    activeCardNumber,
    getWeekDayName,
    fetchWeatherData,
    cityName,
  } = useWeatherStore();
  return (
    <div className={styles["aside-page"]}>
      <SearchForm
        setSearchValue={setSearchValue}
        fetchWeatherData={fetchWeatherData}
      />
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
