import React, { useRef, KeyboardEvent } from "react";
import styles from "./SearchForm.module.scss";
type Props = {
  getSearchValue: any;
  fetchWeatherData: any;
};

const SearchForm = ({ fetchWeatherData, setSearchValue }: Props) => {
  const inputRef = useRef(null);
  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      setSearchValue(inputRef.current.value);

    }
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      onKeyDown={onKeyDown}
      className={styles["search-form"]}
    >
      <label htmlFor="search-input">
        <span
          onClick={(e) => {
            e.preventDefault(),
              setSearchValue(inputRef.current.value),
              fetchWeatherData();
          }}
          className={styles.icon}
        ></span>
      </label>
      <input
        ref={inputRef}
        id="search-input"
        className={styles["search-input"]}
        placeholder="Search..."
      />
    </form>
  );
};

export default SearchForm;
