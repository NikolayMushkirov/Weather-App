import { useRef, KeyboardEvent } from "react";

import searchIcon from "assets/icons/magnifying-glass.svg";

import styles from "./SearchForm.module.scss";
type Props = {
  setSearchValue: WeatherStore["setSearchValue"];
};

const SearchForm = ({ setSearchValue }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      inputRef.current && setSearchValue(inputRef.current.value);
    }
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      onKeyDown={onKeyDown}
      className={styles["search-form"]}
    >
      <label htmlFor="search-input">
        <img
          src={searchIcon}
          alt=""
          className={styles["search-icon"]}
          onClick={(e) => {
            e.preventDefault(),
              inputRef.current && setSearchValue(inputRef.current.value);
          }}
        />
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
