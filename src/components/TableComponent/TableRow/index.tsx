import { LabelType } from "../../../../types/global";
import LabelButton from "../../../../ui-kit/LabelButton/LabelButton";
import styles from "./styles.module.scss";

interface TableRowProps {
  type: string;
  header: string[];
  data: { [key: string]: any };
  index: number;
}

const TableRow = (props: TableRowProps) => {
  const { type, data, header, index } = props;

  const returnText = (value: any): string => {
    const check = typeof value;
    switch (check) {
      case "string":
        return value;
      case "boolean":
        return value ? "abilitato" : "disabilitato";
      case "number":
        return value.toString();
      default:
        return "error";
    }
  };

  return (
    <div
      className={`${styles.TableHeader} ${styles[type]} ${
        index % 2 > 0 ? styles.odd : ""
      }`}
    >
      <div>
        <input type="checkbox" />
      </div>
      {header.map((item, index) => (
        <div key={index}>
          <p>{returnText(data[item])}</p>
        </div>
      ))}

      <div>
        <LabelButton label="edit" type={LabelType.Primary} />
      </div>
    </div>
  );
};

export default TableRow;
