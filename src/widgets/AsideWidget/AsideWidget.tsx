import { useWeatherStore } from "store/store";

import SearchForm from "components/SearchForm/SearchForm";
import RegularWeatherCard from "components/WeatherCards/RegularWeatherCard/RegularWeatherCard";

import useWeatherData from "hooks/useWeatherData";

import styles from "./AsideWidget.module.scss";
import { useSortedWeatherData } from "hooks/useSortedWeatherData";

const AsideWidget = () => {
  const { setSearchValue, activeCardNumber, getWeekDayName } =
    useWeatherStore();

  const { data } = useWeatherData();
  const sortedWeatherData = useSortedWeatherData(data?.forecastData);

  if (!data) {
    return null;
  }

  const weekDayName = getWeekDayName(
    sortedWeatherData[activeCardNumber]?.dt_txt
  );
  const cityName = data?.forecastData?.city.name;

  return (
    <div className={styles["aside-widget"]}>
      <SearchForm setSearchValue={setSearchValue} />
      <RegularWeatherCard
        cityName={cityName}
        sortedWeatherData={sortedWeatherData}
        activeCardNumber={activeCardNumber}
        weekDayName={weekDayName}
      />
    </div>
  );
};

export default AsideWidget;
