import { LabelType } from "../../types/global";
import styles from "./styles.module.scss";

interface Button {
  label: string;
  type: LabelType;
}

const OutlineRoundButton = (props: Button) => {
  const { label, type } = props;
  return (
    <button className={`${styles.OutlineRoundButton} ${styles[type]}`}>
      {label}
    </button>
  );
};

export default OutlineRoundButton;
