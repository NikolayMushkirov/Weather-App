import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useWeatherStore } from "store/store";

const GetWeatherData = () => {
  const {
    setSortedWeatherDataList,
    setAirQualData,
    setWeatherData,
    searchValue,
    setLatitudeCoord,
    setLongitudeCoord,
    latitudeCoord,
    longitudeCoord,
  } = useWeatherStore();

  const API_KEY = import.meta.env.VITE_WEATHER_APP_API_KEY;

  const fetchAirQualityData = async () => {
    const url = `https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${latitudeCoord}&lon=${longitudeCoord}&appid=${API_KEY}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const airData = await response.json();

    return airData;
  };

  const fetchWeatherData = async () => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitudeCoord}&lon=${longitudeCoord}&q=${searchValue}&appid=${API_KEY}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const forecastData = await response.json();

    return forecastData;
  };

  const { data: airQualityData } = useQuery(
    ["airQualityData", latitudeCoord, longitudeCoord, searchValue],
    fetchAirQualityData
  );

  const { data: forecastData } = useQuery(
    ["weatherData", latitudeCoord, longitudeCoord, searchValue],
    fetchWeatherData
  );

  const sortedDataListArr = forecastData?.list.filter(
    (item: { dt_txt: string }) => {
      if (item.dt_txt.slice(11, 19) === "15:00:00") {
        return item;
      }
    }
  );

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;

      setLatitudeCoord(lat);
      setLongitudeCoord(lon);
    });
  }, []);

  useEffect(() => {
    setSortedWeatherDataList(sortedDataListArr);
    setAirQualData(airQualityData);
    setWeatherData(forecastData);
  }, [forecastData, airQualityData]);
  return null;
};

export default GetWeatherData;
