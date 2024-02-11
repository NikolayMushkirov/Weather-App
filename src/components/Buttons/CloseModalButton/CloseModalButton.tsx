import styles from "./CloseModalButton.module.scss";

type Props = {
  handleCloseModal: () => void;
};

const CloseModalButton = ({ handleCloseModal }: Props) => {
  return (
    <div onClick={handleCloseModal} className={styles["close-container"]}>
      <div className={styles.leftright}></div>
      <div className={styles.rightleft}></div>
    </div>
  );
};

export default CloseModalButton;
