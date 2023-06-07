import { create } from "zustand";

export const useWeatherStore = create<WeatherStore>((set) => ({
  weatherData: {
    cnt: 0,
    cod: "",
    message: 0,
    city: {
      id: 0,
      name: "",
      coord: { lat: 0, lon: 0 },
      country: "",
      population: 0,
      timezone: 0,
      sunrise: 0,
      sunset: 0,
    },
    list: [],
  },
  sortedWeatherDataList: [],
  airQualData: {
    coord: { lat: 0, lon: 0 },
    list: [],
  },

  searchValue: "",
  activeCardNumber: 0,
  activeAirCardNumber: 0,
  latitudeCoord: Infinity,
  longitudeCoord: Infinity,

  setWeatherData: (data) => set({ weatherData: data }),
  setAirQualData: (data) => set({ airQualData: data }),
  setSortedWeatherDataList: (data) => set({ sortedWeatherDataList: data }),
  setSearchValue: (searchValue) => set({ searchValue }),
  setActiveCardNumber: (activeCardNumber) => set({ activeCardNumber }),
  setActiveAirCardNumber: (activeAirCardNumber) => set({ activeAirCardNumber }),
  setLatitudeCoord: (latitudeCoord) => set({ latitudeCoord }),
  setLongitudeCoord: (longitudeCoord) => set({ longitudeCoord }),

  changeActiveCard: (e) => {
    const targetId = Number(e.currentTarget.id);
    set((state) => {
      if (targetId !== state.activeCardNumber) {
        return { ...state, activeCardNumber: targetId };
      }
      return state;
    });
  },

  getWeekDayName: (dt_txt: string | Date) => {
    return new Date(dt_txt).toLocaleDateString("en-US", {
      weekday: "long",
    });
  },
}));
