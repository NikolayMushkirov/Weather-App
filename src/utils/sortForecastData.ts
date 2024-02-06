export const sortForecastData = (forecastData : WeatherData | undefined) => {
  return forecastData?.list.filter((item) => item.dt_txt.endsWith("15:00:00"));
};
