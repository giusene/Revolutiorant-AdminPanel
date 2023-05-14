import { LabelType } from "../../types/global";
import styles from "./styles.module.scss";

interface Button {
  label: string;
  type: LabelType;
}

const DefaultButton = (props: Button) => {
  const { label, type } = props;
  return (
    <button className={`${styles.DefaultButton} ${styles[type]}`}>
      {label}
    </button>
  );
};

export default DefaultButton;
