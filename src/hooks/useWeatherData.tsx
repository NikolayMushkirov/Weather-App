import { useQuery } from "@tanstack/react-query";
import { useWeatherStore } from "store/store";
import useGeolocation from "./useGeolocation";

const useWeatherData = () => {
  const { searchValue } = useWeatherStore();
  const geolocation = useGeolocation();

  const fetchWeatherData = async () => {
    const API_KEY = import.meta.env.VITE_WEATHER_APP_API_KEY;
    const weatherDataUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${geolocation?.lat}&lon=${geolocation?.lon}&q=${searchValue}&appid=${API_KEY}&units=metric`;

    const weatherDataResponse = await fetch(weatherDataUrl);
    if (!weatherDataResponse.ok) {
      throw new Error("Network response was not ok");
    }
    const forecastData = await weatherDataResponse.json();

    const airQualLat = await forecastData.city.coord.lat;
    const airQualLon = await forecastData.city.coord.lon;

    const airQualUrl = `https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${airQualLat}&lon=${airQualLon}&appid=${API_KEY}&units=metric`;

    const airQualResponse = await fetch(airQualUrl);
    if (!airQualResponse.ok) {
      throw new Error("Network response was not ok");
    }
    const airData = await airQualResponse.json();

    return { forecastData, airData };
  };

  const { data , isLoading } = useQuery(["weatherData", searchValue], fetchWeatherData, {
    enabled: !!geolocation,
  });

  const sortedWeatherData = data?.forecastData.list.filter(
    (item: { dt_txt: string }) => item.dt_txt.endsWith("15:00:00")
  );
  return { data, sortedWeatherData, isLoading };
};

export default useWeatherData;
