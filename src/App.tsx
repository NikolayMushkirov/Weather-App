import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useWeatherStore } from "./store/store";

import "./App.scss";

import AsidePage from "./pages/AsidePage/AsidePage";
import MainPage from "./pages/MainPage/MainPage";
import Loader from "./components/Loader/Loader";

function App() {
  const API_KEY = `ea0b533a8f3538cb56c478b45c2e7b1c`;
  const {
    setSortedWeatherDataList,
    setWeatherData,
    searchValue,
    setCityName,
    setLatitude,
    setLongitude,
    weatherData,
    setAirQualData,
  } = useWeatherStore();

  const fetchWeatherData = async () => {
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${searchValue}&appid=${API_KEY}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    const secUrl = `http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${data.city.coord.lat}&lon=${data.city.coord.lon}&appid=${API_KEY}`;
    const secResponse = await fetch(secUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const secData = await secResponse.json();
    setAirQualData(secData);
    setWeatherData(data);

    return data;
  };

  const { data, isLoading, error } = useQuery([searchValue], fetchWeatherData);

  const sortedDataListArr =
    data &&
    data.list.filter((item: { dt_txt: string }) => {
      if (item.dt_txt.slice(11, 19) === "15:00:00") {
        return item;
      }
    });

  const lat = data && data.city.coord.lat;
  const lon = data && data.city.coord.lon;

  useEffect(() => {
    setSortedWeatherDataList(sortedDataListArr);
    setCityName(weatherData && weatherData.city.name);
    setLatitude(lat);
    setLongitude(lon);
  }, [data]);

  return (
    <div className="App">
      <MainPage />
      <AsidePage />
    </div>
  );
}

export default App;
