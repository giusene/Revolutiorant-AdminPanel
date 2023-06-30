import { useState } from "react";
import LabelButton from "../../../../../ui-kit/LabelButton/LabelButton";
import { LabelType } from "../../../../../types/global";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";

const Edit = (props: { data: any; catId: string }) => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();
  const { data, catId } = props;
  const [putObj, setPutObj] = useState(
    data.find((obj: any) => obj.id === catId)
  );

  const isFormValid = (): boolean => {
    if (putObj.order && putObj.name) return true;
    return false;
  };

  const editMethod = () => {
    console.log(putObj);
    if (isFormValid()) {
      fetch(`http://localhost:3000/api/categories`, {
        method: "PUT",
        body: JSON.stringify(putObj),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
      setSuccess(true);
      setPutObj({ ...putObj, name: "" });
    } else {
      setError(true);
    }
  };
  const setInput = (key: string, value: any) => {
    setPutObj((prev: any) => ({ ...prev, [key]: value }));
  };

  const back = () => {
    router.push("/menu/categorie");
  };

  return (
    <div className={styles.Edit}>
      <h2>Modifica post</h2>
      {success && (
        <div>
          <p>Elemento modificato con successo</p>
        </div>
      )}
      {error && (
        <div>
          <p className={styles.error}>Inserire i campi richiesti</p>
        </div>
      )}
      <div className={styles.modificaPost}>
        <div className={styles.itemFormEdit}>
          <label>Ordinamento:</label>
          <input
            type="number"
            className={styles.inputFormEdit}
            onChange={(e) => setInput("order", parseInt(e.target.value))}
            value={putObj.order}
          ></input>
        </div>
        <div className={styles.itemFormEdit}>
          <label>Stato:</label>
          <select
            onChange={(e) =>
              setPutObj({
                ...putObj,
                status: e.target.value === "true" ? true : false,
              })
            }
            className={styles.inputFormEdit}
          >
            <option value="true">Abilitato</option>
            <option value="false">Disabilitato</option>
          </select>
        </div>
        <div className={styles.itemFormEdit}>
          <label>Nome Categoria:</label>
          <input
            type="text"
            className={styles.inputFormEdit}
            value={putObj.name}
            onChange={(e) => setInput("name", e.target.value)}
          ></input>
        </div>
        <div className={styles.buttons}>
          <LabelButton
            onClick={editMethod}
            label="Modifica"
            type={LabelType.Success}
          />
          <LabelButton onClick={back} label="Annulla" type={LabelType.Danger} />
        </div>
      </div>
    </div>
  );
};

export default Edit;

export async function getServerSideProps(context: any) {
  const res = await fetch(`http://localhost:3000/api/categories/`);
  const data = await res.json();

  return {
    props: {
      data: data.data,
      catId: context.query.edit,
    },
  };
}
