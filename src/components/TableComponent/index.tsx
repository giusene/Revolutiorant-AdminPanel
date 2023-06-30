import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import styles from "./styles.module.scss";

interface TableComponentProps {
  type: string;
  data: any[];
  header: string[];
  setDeleteList: React.Dispatch<React.SetStateAction<string[]>>;
}

const TableComponent = (props: TableComponentProps) => {
  const { type, data, header, setDeleteList } = props;
  return (
    <>
      <TableHeader type={type} header={header} />
      {data.map((item, i) => (
        <TableRow
          setDeleteList={setDeleteList}
          index={i}
          key={item.id}
          data={item}
          header={header}
          type={type}
        />
      ))}
    </>
  );
};

export default TableComponent;
