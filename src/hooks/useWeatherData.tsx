import { useQuery } from "@tanstack/react-query";
import { useWeatherStore } from "store/store";
import useGeolocation from "./useGeolocation";

const useWeatherData = () => {
  const { searchValue } = useWeatherStore();
  const geolocation = useGeolocation();

  const fetchWeatherData = async () => {
    const API_KEY = import.meta.env.VITE_WEATHER_APP_API_KEY;
    const weatherDataUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${geolocation?.lat}&lon=${geolocation?.lon}&q=${searchValue}&appid=${API_KEY}&units=metric`;
    const airQualUrl = `https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${geolocation?.lat}&lon=${geolocation?.lon}&appid=${API_KEY}&units=metric`;

    const [weatherDataResponse, airQualResponse] = await Promise.all([
      fetch(weatherDataUrl),
      fetch(airQualUrl),
    ]);

    if (!weatherDataResponse.ok) {
      throw new Error(
        `Network response for weather data was not ok: ${weatherDataResponse.status} - ${weatherDataResponse.statusText}`
      );
    }
    if (!airQualResponse.ok) {
      throw new Error(
        `Network response for air quality data was not ok: ${airQualResponse.status} - ${airQualResponse.statusText}`
      );
    }

    const [forecastData, airData] = await Promise.all([
      weatherDataResponse.json(),
      airQualResponse.json(),
    ]);

    return {
      forecastData: forecastData as WeatherData,
      airData: airData as AirQualityData,
    };
  };

  const { data, isLoading, isSuccess } = useQuery(
    ["weatherData", searchValue],
    fetchWeatherData,
    {
      enabled: !!geolocation,
    }
  );

  return { data, isLoading, isSuccess };
};

export default useWeatherData;
