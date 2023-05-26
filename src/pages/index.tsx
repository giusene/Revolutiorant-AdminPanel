import Head from "next/head";
import DefaultButton from "../../ui-kit/DefaultButton/DefaultButton";
import OutlineRoundButton from "../../ui-kit/OutlineRoundButton/OutlineRoundButton";
import DefaultRoundButton from "../../ui-kit/DefaultRoundButton/DefaultRoundButton";
import OutlineButton from "../../ui-kit/OutlineButton/OutlineButton";
import LabelButton from "../../ui-kit/LabelButton/LabelButton";
import RoundLabelButton from "../../ui-kit/RoundLabelButton/RoundLabelButton";
import { LabelType } from "../../types/global";
import styles from "./../styles/index.module.scss";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    fetch("api/categories")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  const addCategory = () => {
    fetch("api/categories", {
      method: "POST",
      body: JSON.stringify({ name: "DOlci", order: 1, status: true }),
    })
      .then(res => res.json())
      .then(data => console.log(data));
  };

  const deleteCategory = () => {
    fetch("api/categories", {
      method: "DELETE",
      body: JSON.stringify({ id: "q10c5V6N2OyLgtQZO5Il" }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <>
      <Head>
        <title>Revolutiorant - Admin Panel</title>
        <meta name="description" content="Revolutiorant - Admin Panel" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.box}>
          <h1>Title 1</h1>
          <h2>Title 2</h2>
          <h3>Title 3</h3>
          <h4>Title 4</h4>
          <h5>Title 5</h5>
          <h6>Title 6</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus consectetur provident ipsa, ab quaerat facere
            voluptates fugiat rerum sunt rem voluptatem, hic unde sint,
            excepturi reprehenderit? Reiciendis iste placeat atque.
          </p>
        </div>
        <div className={styles.box}>
          <h3>Default Buttons</h3>

                    <DefaultButton
            onClick={addCategory}
            label="Aggiungi Categoria"
            type={LabelType.Default}
          />
          <DefaultButton
            onClick={deleteCategory}
            label="Rimuovi Categoria"
            type={LabelType.Primary}
          />
          <DefaultButton label="default" type={LabelType.Default} />
          <DefaultButton label="primary" type={LabelType.Primary} />
          <DefaultButton label="info" type={LabelType.Info} />
          <DefaultButton label="success" type={LabelType.Success} />
          <DefaultButton label="warning" type={LabelType.Warning} />
          <DefaultButton label="danger" type={LabelType.Danger} />



        </div>
        <div className={styles.box}>
          <h3>Outline Round Buttons</h3>
          <OutlineRoundButton
            onClick={addCategory}
            label="default"
            type={LabelType.Default}
          />
          <OutlineRoundButton
            onClick={addCategory}
            label="primary"
            type={LabelType.Primary}
          />
          <OutlineRoundButton
            onClick={addCategory}
            label="info"
            type={LabelType.Info}
          />
          <OutlineRoundButton
            onClick={addCategory}
            label="success"
            type={LabelType.Success}
          />
          <OutlineRoundButton
            onClick={addCategory}
            label="warning"
            type={LabelType.Warning}
          />
          <OutlineRoundButton
            onClick={addCategory}
            label="danger"
            type={LabelType.Danger}
          />
        </div>
        <div className={styles.box}>
          <h3>Default Round Buttons</h3>
          <DefaultRoundButton
            onClick={addCategory}
            label="default"
            type={LabelType.Default}
          />
          <DefaultRoundButton
            onClick={addCategory}
            label="primary"
            type={LabelType.Primary}
          />
          <DefaultRoundButton
            onClick={addCategory}
            label="info"
            type={LabelType.Info}
          />
          <DefaultRoundButton
            onClick={addCategory}
            label="success"
            type={LabelType.Success}
          />
          <DefaultRoundButton
            onClick={addCategory}
            label="warning"
            type={LabelType.Warning}
          />
          <DefaultRoundButton
            onClick={addCategory}
            label="danger"
            type={LabelType.Danger}
          />
        </div>
        <div className={styles.box}>
          <h3>Outline Buttons</h3>
          <OutlineButton
            onClick={addCategory}
            label="default"
            type={LabelType.Default}
          />
          <OutlineButton
            onClick={addCategory}
            label="primary"
            type={LabelType.Primary}
          />
          <OutlineButton
            onClick={addCategory}
            label="info"
            type={LabelType.Info}
          />
          <OutlineButton
            onClick={addCategory}
            label="success"
            type={LabelType.Success}
          />
          <OutlineButton
            onClick={addCategory}
            label="warning"
            type={LabelType.Warning}
          />
          <OutlineButton
            onClick={addCategory}
            label="danger"
            type={LabelType.Danger}
          />
        </div>
        <div className={styles.box}>
          <h3>Button Labels</h3>
          <LabelButton
            onClick={addCategory}
            label="primary"
            type={LabelType.Primary}
          />
          <LabelButton
            onClick={addCategory}
            label="info"
            type={LabelType.Info}
          />
          <LabelButton
            onClick={addCategory}
            label="success"
            type={LabelType.Success}
          />
          <LabelButton
            onClick={addCategory}
            label="warning"
            type={LabelType.Warning}
          />
          <LabelButton
            onClick={addCategory}
            label="danger"
            type={LabelType.Danger}
          />
        </div>
        <div className={styles.box}>
          <h3>Round Button Labels</h3>
          <RoundLabelButton
            onClick={addCategory}
            label="primary"
            type={LabelType.Primary}
          />
          <RoundLabelButton
            onClick={addCategory}
            label="info"
            type={LabelType.Info}
          />
          <RoundLabelButton
            onClick={addCategory}
            label="success"
            type={LabelType.Success}
          />
          <RoundLabelButton
            onClick={addCategory}
            label="warning"
            type={LabelType.Warning}
          />
          <RoundLabelButton
            onClick={addCategory}
            label="danger"
            type={LabelType.Danger}
          />
        </div>
      </main>
    </>
  );
}
