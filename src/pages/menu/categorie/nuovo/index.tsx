import styles from "./styles.module.scss";
import { RiPencilLine } from "react-icons/ri";
import LabelButton from "../../../../../ui-kit/LabelButton/LabelButton";
import { LabelType } from "../../../../../types/global";
import { useState } from "react";
import { useRouter } from "next/router";

const NuovoCategorie = () => {
  const router = useRouter();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    name: "",
    order: 1,
    status: true,
  });

  const isFormValid = (): boolean => {
    if (form.order && form.name) return true;
    return false;
  };

  const setInput = (key: string, value: any) => {
    setError(false);
    setSuccess(false);
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const onSubmit = () => {
    if (isFormValid()) {
      fetch("http://localhost:3000/api/categories", {
        method: "POST",
        body: JSON.stringify(form),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
      setForm({ ...form, name: "" });
      setSuccess(true);
    } else {
      setError(true);
    }
  };

  const back = () => {
    router.push("/menu/categorie");
  };

  return (
    <div className={styles.NuovoCategorie}>
      <p className={styles.icon_text}>
        <RiPencilLine className={styles.icon} />
        Aggiungi Categoria
      </p>
      <div className={styles.formAdd}>
        <div className={styles.itemFormAdd}>
          <label>Ordinamento:</label>
          <input
            value={form.order}
            onChange={(e) => setInput("order", parseInt(e.target.value))}
            className={styles.inputFormAdd}
            type="number"
            placeholder="Inserisci ordinamento"
          />
        </div>
        <div className={styles.itemFormAdd}>
          <label>Stato:</label>
          <select
            onChange={(e) =>
              setForm({
                ...form,
                status: e.target.value === "true" ? true : false,
              })
            }
            className={styles.inputFormAdd}
            name="Stato"
          >
            <option value="true">Abilitato</option>
            <option value="false">Disabilitato</option>
          </select>
        </div>
        <div className={styles.itemFormAdd}>
          <label>Nome Categoria:</label>
          <input
            value={form.name}
            onChange={(e) => setInput("name", e.target.value)}
            className={styles.inputFormAdd}
            type="text"
            placeholder="Nome categoria"
            required
          />
        </div>
        {success && (
          <div>
            <p>Elemento aggiunto con successo</p>
          </div>
        )}
        {error && (
          <div>
            <p className={styles.error}>Inserire i campi richiesti</p>
          </div>
        )}
        <div className={styles.buttons}>
          <LabelButton
            onClick={onSubmit}
            label="Aggiungi"
            type={LabelType.Success}
          />
          <LabelButton onClick={back} label="Annulla" type={LabelType.Danger} />
        </div>
      </div>
    </div>
  );
};

export default NuovoCategorie;
