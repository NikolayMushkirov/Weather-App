type WeatherStore = {
  weatherData: WeatherData ;
  sortedWeatherDataList: SortedWeatherDataList  ;
  airQualData: AirQualityData ;
  searchValue: string;
  activeCardNumber: number;
  activeAirCardNumber: number;
  latitudeCoord: number;
  longitudeCoord: number;

  setWeatherData: (data: WeatherData) => void;
  setAirQualData: (data: AirQualityData) => void;
  setSortedWeatherDataList: (data: SortedWeatherDataList) => void;
  setSearchValue: (searchValue: string) => void;
  setActiveCardNumber: (activeCardNumber: number) => void;
  setActiveAirCardNumber: (activeAirCardNumber: number) => void;
  setLatitudeCoord: (lat: number) => void;
  setLongitudeCoord: (lon: number) => void;
  changeActiveCard: (e: React.MouseEvent<HTMLDivElement>) => void;
  getWeekDayName: (dt_txt: string | Date) => string;
};

type WeatherData = {
  cnt: number;
  cod: string;
  message: number;
  city: City;
  list: List[];
};

type AirQualityData = {
  coord: Coord;
  list: AirQualDataList[];
};

type AirQualDataList = {
  main: { aqi: number };
  components: { [key: string]: number };
  dt: number;
};

type SortedWeatherDataList = Array<List>;

type City = {
  id: number;
  name: string;
  coord: Coord;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
};
type List = {
  dt: number;
  main: Main;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number;
  sys: Sys;
  dt_txt: Date;
};

type Coord = {
  lat: number;
  lon: number;
};

type Clouds = {
  all: number;
};

type Main = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
};

type Sys = {
  pod: string;
};

type Weather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

type Wind = {
  speed: number;
  deg: number;
  gust: number;
};
