import styles from "./styles.module.scss";

interface TableHeaderProps {
  type: string;
  header: string[];
}

const TableHeader = (props: TableHeaderProps) => {
  const { type, header } = props;

  return (
    <div className={`${styles.TableHeader} ${styles[type]}`}>
      <div>
        <input type="checkbox" />
      </div>
      {header.map((item, index) => (
        <div key={index}>
          <p>{item}</p>
        </div>
      ))}

      <div className={styles.emptyInside}></div>
    </div>
  );
};

export default TableHeader;
