import TableComponent from "@/components/TableComponent";
import styles from "./styles.module.scss";
import OutlineButton from "../../../../ui-kit/OutlineButton/OutlineButton";
import { LabelType } from "../../../../types/global";
import { useRouter } from "next/router";
import { useState } from "react";

const CategorieSubPage = (props: { categories: any[] }) => {
  const [deleteList, setDeleteList] = useState<string[]>([]);
  const [notSelect, setNotSelect] = useState(false);
  const { categories } = props;
  const router = useRouter();

  const tableHeader = ["name", "order", "status"];

  const addCategory = () => {
    router.push("categorie/nuovo");
  };

  const deleteCategory = () => {
    if (deleteList.length === 0) {
      setNotSelect(true);
    } else {
      const deletePromises = deleteList.map((item) => {
        const obj = {
          id: item,
        };
        console.log(obj);
        return fetch("http://localhost:3000/api/categories", {
          method: "DELETE",
          body: JSON.stringify(obj),
        });
        // .then((res) => res.json())
        // .then((data) => {
        //   console.log(data);
        //   return data; // Puoi restituire il risultato se necessario
        // });
      });

      Promise.all(deletePromises)
        .then((results) => {
          console.log("Tutte le richieste sono state completate:", results);
          router.reload();
        })
        .catch((error) => {
          console.error(
            "Si è verificato un errore durante l'esecuzione delle richieste:",
            error
          );
        });
    }
  };

  return (
    <div className={styles.CategorieSubPage}>
      <div className={styles.addDelete}>
        <OutlineButton
          onClick={addCategory}
          label="Aggiungi Categoria +"
          type={LabelType.Info}
        />
        {notSelect && (
          <div>
            <p>Seleziona categoria</p>
          </div>
        )}
        <OutlineButton
          onClick={deleteCategory}
          label="Elimina Categoria -"
          type={LabelType.Danger}
        />
      </div>
      <TableComponent
        setDeleteList={setDeleteList}
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
