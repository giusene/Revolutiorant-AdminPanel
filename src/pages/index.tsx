import Head from "next/head";
import DefaultButton from "../../ui-kit/DefaultButton/DefaultButton";
import { LabelType } from "../../types/global";
import styles from "./../styles/index.module.scss";

export default function Home() {
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
          <DefaultButton label="default" type={LabelType.Default} />
          <DefaultButton label="primary" type={LabelType.Primary} />
          <DefaultButton label="info" type={LabelType.Info} />
          <DefaultButton label="success" type={LabelType.Success} />
          <DefaultButton label="warning" type={LabelType.Warning} />
          <DefaultButton label="danger" type={LabelType.Danger} />
        </div>
      </main>
    </>
  );
}
