import { render, fireEvent } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import "@testing-library/jest-dom";

import RegularWeatherCard from "components/WeatherCards/RegularWeatherCard/RegularWeatherCard";

describe("RegularWeatherCard component", () => {
  const mockProps = {
    cityName: "City",
    activeCardNumber: 0,
    weekDayName: "Monday",
    sortedWeatherData: [
      {
        dt: 1706819200,
        main: {
          temp: 25,
          humidity: 50,
          feels_like: 22,
          temp_min: 20,
          temp_max: 30,
          pressure: 1010,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10n",
          },
        ],
        wind: { speed: 5, deg: 210, gust: 3.58 },
        visibility: 10000,
        pop: 0.33,
        clouds: { all: 96 },
        sys: { pod: "n" },
        dt_txt: "2024-01-30 18:00:00",
      },
    ],
    handleOpenModal: vi.fn(),
  };

  test("renders RegularWeatherCard component correctly", () => {
    const { getByText } = render(<RegularWeatherCard {...mockProps} />);
    expect(getByText("City")).toBeInTheDocument();
    expect(getByText("Monday")).toBeInTheDocument();
    expect(getByText("25°")).toBeInTheDocument();
    expect(getByText("Rain")).toBeInTheDocument();
    expect(getByText("5 m/s")).toBeInTheDocument();
    expect(getByText("50 %")).toBeInTheDocument();
  });

  test("calls handleOpenModal when clicked on the card", () => {
    const { container } = render(<RegularWeatherCard {...mockProps} />);
    const card = container.querySelector(".regular-weather-card");
    if (card) {
      fireEvent.click(card);
      expect(mockProps.handleOpenModal).toHaveBeenCalled();
    }
  });
});
