import { useWeatherStore } from "store/store";

import AsideWidget from "widgets/AsideWidget/AsideWidget";
import MainWidget from "widgets/MainWidget/MainWidget";
import Loader from "components/Loader/Loader";

import styles from "./MainPage.module.scss";

type Props = {
  theme: string;
  switchTheme: () => void;
};

const MainPage = ({ switchTheme, theme }: Props) => {
  const { sortedWeatherDataList } = useWeatherStore();

  return (
    <main className={styles["main-page"]}>
      <>
        <MainWidget switchTheme={switchTheme} theme={theme} />
        <AsideWidget />
      </>
    </main>
  );
};

export default MainPage;
