import { BiError, BiCheck, BiX, BiPencil } from "react-icons/bi";
import { BsExclamationLg } from "react-icons/bs";
import { LabelType } from "../../types/global";
import styles from "./styles.module.scss";

interface Button {
  label: string;
  type: LabelType;
  onClick?: () => void;
}

const RoundLabelButton = (props: Button) => {
  const { label, type, onClick } = props;

  const iconSelector = () => {
    switch (type) {
      case LabelType.Edit:
        return <BiPencil className={styles.icon} />;
      case LabelType.Info:
        return <BsExclamationLg className={styles.icon} />;
      case LabelType.Success:
        return <BiCheck className={styles.icon} />;
      case LabelType.Danger:
        return <BiX className={styles.icon} />;
      case LabelType.Warning:
        return <BiError className={styles.icon} />;
    }
  };

  return (
    <button
      onClick={() => onClick && onClick()}
      className={`${styles.RoundLabelButton} ${styles[type]}`}
    >
      <div className={styles.content_icon}>{iconSelector()}</div>
      <div className={styles.label}>{label}</div>
    </button>
  );
};

export default RoundLabelButton;
