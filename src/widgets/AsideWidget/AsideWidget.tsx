import { useWeatherStore } from "store/store";

import SearchForm from "components/SearchForm/SearchForm";
import RegularWeatherCard from "components/WeatherCards/RegularWeatherCard/RegularWeatherCard";

import useWeatherData from "hooks/useWeatherData";

import styles from "./AsideWidget.module.scss";

const AsideWidget = () => {
  const { setSearchValue, activeCardNumber, getWeekDayName } =
    useWeatherStore();

  const { data, sortedWeatherData } = useWeatherData();

  const weekDayName = getWeekDayName(
    sortedWeatherData[activeCardNumber]?.dt_txt,
  );

  return (
    <div className={styles["aside-widget"]}>
      <SearchForm setSearchValue={setSearchValue} />
      <RegularWeatherCard
        cityName={data?.forecastData?.city.name}
        sortedWeatherData={sortedWeatherData}
        activeCardNumber={activeCardNumber}
        weekDayName={weekDayName}
      />
    </div>
  );
};

export default AsideWidget;
