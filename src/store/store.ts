import { create } from "zustand";

export const useWeatherStore = create<WeatherStore>((set) => ({
  searchValue: "Bokhan",
  activeCardNumber: 0,
  activeAirCardNumber: 0,
  latitudeCoord: 0,
  longitudeCoord: 0,

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

  getWeekDayName: (dt_txt: Date) => {
    return new Date(dt_txt).toLocaleDateString("en-US", {
      weekday: "long",
    });
  },
}));
