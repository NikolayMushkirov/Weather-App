import { create } from "zustand";

export const useWeatherStore = create<WeatherStore>((set) => ({
  searchValue: "",
  activeCardNumber: 0,
  modalIsOpen: false,

  handleOpenModal: () => set({ modalIsOpen: true }),
  handleCloseModal: () => set({ modalIsOpen: false }),

  setSearchValue: (searchValue) => set({ searchValue }),
  setActiveCardNumber: (activeCardNumber) => set({ activeCardNumber }),

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
