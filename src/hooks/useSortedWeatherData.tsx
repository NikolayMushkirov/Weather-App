import { useEffect, useState } from "react";

const useSortedWeatherData = (weatherData: WeatherData | undefined) => {
  const [sortedWeatherData, setSortedWeatherData] = useState<List[]>([]);

  useEffect(() => {
    if (weatherData) {
      const filteredData = weatherData.list.filter((item) =>
        item.dt_txt.endsWith("15:00:00")
      );
      setSortedWeatherData(filteredData);
    }
  }, [weatherData]);

  return sortedWeatherData;
};
export { useSortedWeatherData };
