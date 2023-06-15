import TableComponent from "@/components/TableComponent";
import styles from "./styles.module.scss";

const CategorieSubPage = (props: { categories: any[] }) => {
  const { categories } = props;

  const tableHeader = ["name", "order", "status"];

  return (
    <div className={styles.CategorieSubPage}>
      <TableComponent
        header={tableHeader}
        data={categories}
        type="categories"
      />
    </div>
  );
};

export default CategorieSubPage;

export async function getStaticProps() {
  const categories = await fetch("http://localhost:3000/api/categories");

  const data = await categories.json();

  return { props: { categories: data.data } };
}
