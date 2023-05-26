import { LabelType } from "../../types/global";
import styles from "./styles.module.scss";

interface Button {
  label: string;
  type: LabelType;
  onClick?: () => void;
}

const DefaultRoundButton = (props: Button) => {
  const { label, type, onClick } = props;
  return (
    <button
      onClick={() => onClick && onClick()}
      className={`${styles.DefaultRoundButton} ${styles[type]}`}
    >
      {label}
    </button>
  );
};

export default DefaultRoundButton;
