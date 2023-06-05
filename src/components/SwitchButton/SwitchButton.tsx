import React from "react";

import moonIcon from "../../assets/icons/moon.svg";
import sunIcon from "../../assets/icons/sun.svg";

import classnames from "classnames";
import styles from "./SwitchButton.module.scss";
type Props = {
  switchTheme: () => void;
};

const SwitchButton = ({ switchTheme }: Props) => {
  return (
    <div className={styles["switch-button"]}>
      <input
        className={styles["switch-checkbox"]}
        id={`switch-new`}
        type="checkbox"
        onChange={switchTheme}
      />
      <label className={styles["switch-label"]} htmlFor={`switch-new`}>
        <img
          src={sunIcon}
          alt=""
          className={classnames(styles["switch-icon"], styles["sun-icon"])}
        />
        <img
          src={moonIcon}
          alt=""
          className={classnames(styles["switch-icon"], styles["moon-icon"])}
        />
      </label>
    </div>
  );
};

export default SwitchButton;
