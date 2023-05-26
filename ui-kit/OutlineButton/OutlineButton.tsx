import { LabelType } from "../../types/global";
import styles from "./styles.module.scss";

interface Button {
  label: string;
  type: LabelType;
  onClick?: () => void;
}

const OutlineButton = (props: Button) => {
  const { label, type, onClick } = props;
  return (
    <button
      onClick={() => onClick && onClick()}
      className={`${styles.OutlineButton} ${styles[type]}`}
    >
      {label}
    </button>
  );
};

export default OutlineButton;
