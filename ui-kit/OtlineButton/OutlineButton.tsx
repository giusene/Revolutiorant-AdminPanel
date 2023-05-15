import { LabelType } from "../../types/global";
import styles from "./styles.module.scss";

interface Button {
  label: string;
  type: LabelType;
}

const OutlineButton = (props: Button) => {
  const { label, type } = props;
  return (
    <button className={`${styles.OutlineButton} ${styles[type]}`}>
      {label}
    </button>
  );
};

export default OutlineButton;
