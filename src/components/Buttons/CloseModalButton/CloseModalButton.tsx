import closeIcon from "../../../assets/icons/ui/close_icon.svg";
import styles from "./CloseModalButton.module.scss";

type Props = {
  handleCloseModal: () => void;
};

const CloseModalButton = ({ handleCloseModal }: Props) => {
  return (
    <button className={styles["close-button"]} onClick={handleCloseModal}>
      <img className={styles["close-icon"]} src={closeIcon} />
    </button>
  );
};

export default CloseModalButton;
