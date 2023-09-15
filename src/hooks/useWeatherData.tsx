import { useQuery } from "@tanstack/react-query";

const useWeatherData = (searchValue?: string) => {
  const API_KEY = import.meta.env.VITE_WEATHER_APP_API_KEY;
  const getGeoLocation = navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      return { lat, long };
    }
  );

  const fetchWeatherData = async () => {
    const weatherDataUrl = `https://api.openweathermap.org/data/2.5/forecast?&q=${'Bokhan'}&appid=${API_KEY}&units=metric`;

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

    return  {forecastData ,airData} ;
  };

  const { data } = useQuery(
    ["weatherData", searchValue],
    fetchWeatherData
  );



  const sortedWeatherData = data?.forecastData.list.filter(
    (item: { dt_txt: string }) => item.dt_txt.endsWith("15:00:00")
  );
  return { data, sortedWeatherData  };
};

export default useWeatherData;
