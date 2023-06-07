import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useWeatherStore } from "../store/store";

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

  const fetchWeatherData = async () => {
    const API_KEY = import.meta.env.VITE_WEATHER_APP_API_KEY;

    const url = `http://api.openweathermap.org/data/2.5/forecast?lat=${latitudeCoord}&lon=${longitudeCoord}&q=${searchValue}&appid=${API_KEY}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const weathData = await response.json();

    const secUrl = `http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${weathData.city.coord.lat}&lon=${weathData.city.coord.lon}&appid=${API_KEY}`;

    const secResponse = await fetch(secUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const airData = await secResponse.json();

    return { weathData, airData };
  };

  const { data } = useQuery([latitudeCoord, longitudeCoord, searchValue], () =>
    fetchWeatherData()
  );

  console.log(data, "app data");

  const sortedDataListArr = data?.weathData.list.filter(
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
    setAirQualData(data?.airData);
    setWeatherData(data?.weathData);
  }, [data]);
  return null;
};

export default GetWeatherData;
