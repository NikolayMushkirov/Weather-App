import useLocalStorage from "use-local-storage";

import { useWeatherStore } from "store/store";

import AsideWidget from "widgets/AsideWidget/AsideWidget";
import MainWidget from "widgets/MainWidget/MainWidget";
import Loader from "components/Loader/Loader";

import styles from "./MainPage.module.scss";

const MainPage = () => {
  const { sortedWeatherDataList } = useWeatherStore();

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
      {sortedWeatherDataList?.length ? (
        <>
          <MainWidget switchTheme={switchTheme} theme={theme} />
          <AsideWidget />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default MainPage;
