import AsideWidget from "widgets/AsideWidget/AsideWidget";
import MainWidget from "widgets/MainWidget/MainWidget";
import Loader from "components/Loader/Loader";

import styles from "./MainPage.module.scss";
import useWeatherData from "hooks/useWeatherData";

const MainPage = () => {
  const { isLoading } = useWeatherData();

  return (
    <main className={styles["main-page"]}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <MainWidget />
          <AsideWidget />
        </>
      )}
    </main>
  );
};

export default MainPage;
