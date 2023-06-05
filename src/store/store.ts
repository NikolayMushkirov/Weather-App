import { create } from "zustand";


export const useWeatherStore = create<WeatherStore>((set) => ({
  weatherData: null,
  airQualData: null,
  sortedWeatherDataList: null,
  searchValue: "Irkutsk",
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
