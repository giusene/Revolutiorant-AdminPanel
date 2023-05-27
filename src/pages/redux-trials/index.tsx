import { RiRestaurantLine } from "react-icons/ri";
import { useRef } from "react";
import { addFakeObject, fetchFakeObject, selectFakeObjects, selectStatus } from "@/store/features/example-slice";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.scss";

const ReduxTrials = () => {
  const name = useRef<string>("");
  const spec = useRef<string>("");

  const dispatch = useDispatch();
  const fakeObjects = useSelector(selectFakeObjects);
  const status = useSelector(selectStatus);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name.current.trim() !== "" && spec.current.trim() !== "") {
      dispatch(addFakeObject({ name: name.current, spec: spec.current }));
    }
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="name">Nome</label>
        <input
          onChange={(e) => (name.current = e.target.value)}
          type="text"
          id="name"
          name="name"
        />
        <label htmlFor="spec">Descrizione</label>
        <input
          onChange={(e) => (spec.current = e.target.value)}
          type="text"
          id="spec"
          name="spec"
        />
        <button >Aggiungi</button>
      </form>

      <div>
        <h2>List of Fake Objects</h2>
        <ol>
          {fakeObjects.map((el) => (
            <li key={el.id}>
              Nome:{el.name} Descrizione:{el.spec}
            </li>
          ))}
        </ol>
      </div>

      <div>
        <h2>Trigger async fetch</h2>
        {status}

        <button onClick={() => dispatch<any>(fetchFakeObject())}>Start</button>
      </div>
    </div>
  );
};

export default ReduxTrials;
