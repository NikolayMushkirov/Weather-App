import MainPage from "pages/MainPage/MainPage";

import useTheme from "hooks/useTheme";

import "./App.scss";

function App() {
  const { theme } = useTheme();

  return (
    <div className="App" data-theme={theme}>
      <MainPage />
    </div>
  );
}

export default App;
