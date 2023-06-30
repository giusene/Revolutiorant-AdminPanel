import { useState } from "react";
import { LabelType } from "../../../../types/global";
import LabelButton from "../../../../ui-kit/LabelButton/LabelButton";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";

interface TableRowProps {
  type: string;
  header: string[];
  data: { [key: string]: any };
  index: number;
  setDeleteList: React.Dispatch<React.SetStateAction<string[]>>;
}

const TableRow = (props: TableRowProps) => {
  const router = useRouter();
  const [isChecked, setIsChecked] = useState(false);
  const { type, data, header, index, setDeleteList } = props;

  const edit = () => {
    router.push(`categorie/edit/${data.id}`);
  };

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

  const checkedList = (value: boolean) => {
    setIsChecked(value);
    if (value) {
      setDeleteList((prev: string[]) => [...prev, data.id]);
    } else {
      setDeleteList((prev) => prev.filter((item) => item !== data.id));
    }
  };

  return (
    <div
      className={`${styles.TableHeader} ${styles[type]} ${
        index % 2 > 0 ? styles.odd : ""
      }`}
    >
      <div>
        <input
          checked={isChecked}
          onChange={(e) => checkedList(e.target.checked)}
          type="checkbox"
        />
      </div>
      {header.map((item, index) => (
        <div key={index}>
          <p>{returnText(data[item])}</p>
        </div>
      ))}

      <div>
        <LabelButton onClick={edit} label="edit" type={LabelType.Edit} />
      </div>
    </div>
  );
};

export default TableRow;
