import React, { KeyboardEvent } from "react";
import styles from "./SearchForm.module.scss";
type Props = {
  getSearchValue: any;
  fetchWeatherData: any;
};

const SearchForm = ({ getSearchValue, fetchWeatherData }: Props) => {
  const onKeyDown = (e:KeyboardEvent) => {
    if (e.key === "Enter") return fetchWeatherData();
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
            e.preventDefault(), fetchWeatherData();
          }}
          className={styles.icon}
        ></span>
      </label>
      <input
        onChange={(e) => getSearchValue(e)}
        id="search-input"
        className={styles["search-input"]}
        placeholder="Search..."
      />
    </form>
  );
};

export default SearchForm;
