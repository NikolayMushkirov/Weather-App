import { useWeatherStore } from "store/store";

import AsideWidget from "widgets/AsideWidget/AsideWidget";
import MainWidget from "widgets/MainWidget/MainWidget";
import Loader from "components/Loader/Loader";

import styles from "./MainPage.module.scss";
import useWeatherData from "hooks/useWeatherData";

type Props = {
  theme: string;
  switchTheme: () => void;
};

const MainPage = ({ switchTheme, theme }: Props) => {
  const { isLoading } = useWeatherData();

  return (
    <main className={styles["main-page"]}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <MainWidget switchTheme={switchTheme} theme={theme} />
          <AsideWidget />
        </>
      )}
    </main>
  );
};

export default MainPage;
