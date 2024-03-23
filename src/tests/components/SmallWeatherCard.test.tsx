import { describe, expect, test, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import SmallWeatherCard from "components/WeatherCards/SmallWeatherCard/SmallWeatherCard";

describe("SmallWeatherCard component", () => {
  const mockProps = {
    dayName: "Monday",
    id: "1",
    temp: 20,
    weatherStatus: "sunny",
    handleOpenModal: vi.fn(),
    changeActiveCard: vi.fn(),
    activeCardNumber: 1,
  };

  test("renders SmallWeatherCard component correctly", () => {
    const { getByText, getByAltText } = render(
      <SmallWeatherCard {...mockProps} />,
    );
    expect(getByText("Monday")).toBeInTheDocument();
    expect(getByText("20°")).toBeInTheDocument();
    expect(getByAltText("")).toBeInTheDocument();
  });

  test("calls handleOpenModal when clicked on the active card", () => {
    const { container } = render(<SmallWeatherCard {...mockProps} />);
    const activeCard = container.querySelector(".small-card-active");
    if (activeCard) {
      fireEvent.click(activeCard);
      expect(mockProps.handleOpenModal).toHaveBeenCalled();
    }
  });

  test("calls changeActiveCard when clicked on a non-active card", () => {
    const { container } = render(<SmallWeatherCard {...mockProps} />);
    const nonActiveCard = container.querySelector(".small-card");
    if (nonActiveCard) {
      fireEvent.click(nonActiveCard);
      expect(mockProps.changeActiveCard).toHaveBeenCalled();
    }
  });
});
