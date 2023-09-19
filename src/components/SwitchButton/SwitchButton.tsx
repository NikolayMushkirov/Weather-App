import classnames from "classnames";

import moonIcon from "assets/icons/moon.svg";
import sunIcon from "assets/icons/sun.svg";

import styles from "./SwitchButton.module.scss";
import useTheme from "hooks/useTheme";

const SwitchButton = () => {
  const { theme, switchTheme } = useTheme();

  return (
    <div className={styles["switch-button"]}>
      <input
        className={styles["switch-checkbox"]}
        id={`switch-new`}
        type="checkbox"
        onChange={switchTheme}
      />
      <label
        className={classnames(
          styles["switch-label"],
          theme === "dark" && styles["switch-label-checked"]
        )}
        htmlFor={`switch-new`}
      >
        {theme === "dark" ? (
          <img
            src={moonIcon}
            alt=""
            className={classnames(styles["switch-icon"], styles["moon-icon"])}
          />
        ) : (
          <img
            src={sunIcon}
            alt=""
            className={classnames(
              styles["switch-icon"],
              styles["switch-icon-checked"],
              styles["sun-icon"]
            )}
          />
        )}
      </label>
    </div>
  );
};

export default SwitchButton;
