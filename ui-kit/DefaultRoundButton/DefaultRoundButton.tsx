import { LabelType } from "../../types/global";
import styles from "./styles.module.scss";

interface Button {
  label: string;
  type: LabelType;
}

const DefaultRoundButton = (props: Button) => {
  const { label, type } = props;
  return (
    <button className={`${styles.DefaultRoundButton} ${styles[type]}`}>
      {label}
    </button>
  );
};

export default DefaultRoundButton;
