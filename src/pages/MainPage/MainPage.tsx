import React from "react";

import { useWeatherStore } from "../../store/store";
import useLocalStorage from "use-local-storage";

import AsideWidget from "../../widgets/AsideWidget/AsideWidget";
import MainWidget from "../../widgets/MainWidget/MainWidget";
import styles from "./MainPage.module.scss";
import Loader from "../../components/Loader/Loader";

const MainPage = () => {
  const { weatherData } = useWeatherStore();

  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className={styles["main-page"]} data-theme={theme}>
      {weatherData ? (
        <>
          <MainWidget switchTheme={switchTheme} />
          <AsideWidget />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default MainPage;
