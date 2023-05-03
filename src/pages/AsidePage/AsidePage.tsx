import React from "react";
import styles from "./AsidePage.module.scss";
import WeatherCards from "../../components/WeatherCards/WeatherCards";
import SearchForm from "../../components/SearchForm/SearchForm";
type Props = {
  fetchWeatherData: Function;
  getSearchValue: Function;
};

const AsidePage: React.FC<Props> = ({
  weatherData,
  getSearchValue,
  fetchWeatherData,
  sortedDataListArr,
  activeCardNumber,
}) => {
  return (
    <div className={styles["aside-page"]}>
      <SearchForm
        getSearchValue={getSearchValue}
        fetchWeatherData={fetchWeatherData}
      />
      <WeatherCards
        weatherData={weatherData}
        sortedDataListArr={sortedDataListArr}
        activeCardNumber={activeCardNumber}
      />
    </div>
  );
};

export default AsidePage;
