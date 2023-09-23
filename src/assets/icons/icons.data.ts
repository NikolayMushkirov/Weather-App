import Thunderstorm from "./all/thunderstorms.svg";
import Drizzle from "./all/drizzle.svg";
import Rain from "./all/rain.svg";
import Snow from "./all/snow.svg";
import Mist from "./all/mist.svg";
import Smoke from "./all/smoke.svg";
import Haze from "./all/haze.svg";
import Dust from "./all/dust.svg";
import Fog from "./all/fog.svg";
import Sand from "./all/dust.svg";
import Ash from "./all/smoke.svg";
import Squall from "./all/thunderstorms-rain.svg";
import Tornado from "./all/tornado.svg";
import Clear from "./all/clear-day.svg";
import Clouds from "./all/cloudy.svg";

type WeatherIcons = {
  [key: string]: string;
};

export const weatherIcons: WeatherIcons = {
  Thunderstorm: Thunderstorm,
  Drizzle: Drizzle,
  Rain: Rain,
  Snow: Snow,
  Mist: Mist,
  Smoke: Smoke,
  Haze: Haze,
  Dust: Dust,
  Fog: Fog,
  Sand: Sand,
  Ash: Ash,
  Squall: Squall,
  Tornado: Tornado,
  Clear: Clear,
  Clouds: Clouds,
};
