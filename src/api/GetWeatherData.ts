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

  const fetchWeatherData = async () => {
    const weatherDataUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitudeCoord}&lon=${longitudeCoord}&q=${searchValue}&appid=${API_KEY}&units=metric`;

    const weatherDataResponse = await fetch(weatherDataUrl);
    if (!weatherDataResponse.ok) {
      throw new Error("Network response was not ok");
    }
    const forecastData = await weatherDataResponse.json();

    const airQualLat = forecastData.city.coord.lat || latitudeCoord;
    const airQualLon = forecastData.city.coord.lon || longitudeCoord;

    const airQualUrl = `https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${airQualLat}&lon=${airQualLon}&appid=${API_KEY}&units=metric`;

    const airQualResponse = await fetch(airQualUrl);
    if (!airQualResponse.ok) {
      throw new Error("Network response was not ok");
    }
    const airData = await airQualResponse.json();

    return { forecastData, airData };
  };

  const { data } = useQuery(
    ["weatherData", latitudeCoord, longitudeCoord, searchValue],
    fetchWeatherData
  );

  const sortedDataListArr = data?.forecastData.list.filter(
    (item: { dt_txt: string }) => item.dt_txt.endsWith("15:00:00")
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
    setWeatherData(data?.forecastData);
  }, [data]);

  return null;
};

export default GetWeatherData;
