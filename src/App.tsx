import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import "./App.scss";

import AsidePage from "./pages/AsidePage/AsidePage";
import MainPage from "./pages/MainPage/MainPage";
import axios from "axios";

function App() {
  const API_KEY = `95fada45b19366e71bbe8760d47de0b5`;

  const [searchValue, setSearchValue] = useState("Bokhan");
  const [activeCardNumber, setActiveCardNumber] = useState(0);

  const fetchWeatherData = async () => {
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${searchValue}&appid=${API_KEY}`;
    const { data } = await axios.get(url);
    return data;
  };

  const { isLoading, error, data } = useQuery([searchValue], fetchWeatherData);
  console.log(data, "data");

  const sortedDataListArr =
    data &&
    data.list.filter((item) => {
      if (item.dt_txt.slice(11, 19) === "15:00:00") {
        return item;
      }
    });

  const changeActiveCard = (e) => {
    const targetId = Number(e.target.id);
    if (targetId !== activeCardNumber) return setActiveCardNumber(targetId);
  };

  const getSearchValue = (e) => {
    setSearchValue(e.currentTarget.value);
  };

  return (
    <div className="App">
      {isLoading ? (
        "Loading..."
      ) : (
        <>
          <MainPage
            sortedDataListArr={sortedDataListArr}
            changeActiveCard={changeActiveCard}
          />
          <AsidePage
            activeCardNumber={activeCardNumber}
            sortedDataListArr={sortedDataListArr}
            getSearchValue={getSearchValue}
            fetchWeatherData={fetchWeatherData}
          />
        </>
      )}
    </div>
  );
}

export default App;
