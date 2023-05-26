import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import styles from "./styles.module.scss";

interface TableComponentProps {
  type: string;
  data: any[];
  header: string[];
}

const TableComponent = (props: TableComponentProps) => {
  const { type, data, header } = props;
  return (
    <>
      <TableHeader type={type} header={header} />
      {data.map((item, i) => (
        <TableRow
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
