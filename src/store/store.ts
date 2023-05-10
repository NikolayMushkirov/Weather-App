import { create } from "zustand";

export const useWeatherStore = create<WeatherStore>((set) => ({
  weatherData: null,
  airQualData: null,
  sortedWeatherDataList: null,
  searchValue: "Bokhan",
  activeCardNumber: 0,
  activeAirCardNumber:0,
  cityName : null,
  latitude :  0,
  longitude: 0,

  setWeatherData: (data) => set({ weatherData: data }),
  setAirQualData : (data) => set({airQualData: data}),
  setSortedWeatherDataList: (data) => set({ sortedWeatherDataList: data }),
  setSearchValue: (searchValue) => set({ searchValue }),
  setActiveCardNumber: (activeCardNumber) => set({ activeCardNumber }),
  setActiveAirCardNumber: (activeAirCardNumber) => set({ activeAirCardNumber }),
  setCityName : (cityName) => set({cityName}),
  setLatitude :  (latitude) => set({latitude}),
  setLongitude :  (longitude) => set({longitude}),

  changeActiveCard: (e) => {
    const targetId = Number(e.currentTarget.id);
    set((state) => {
      if (targetId !== state.activeCardNumber) {
        return { ...state, activeCardNumber: targetId };
      }
      return state;
    });
  },

  getWeekDayName: (dt_txt: string) => {
    return new Date(dt_txt).toLocaleDateString("en-US", {
      weekday: "long",
    });
  },
}));
