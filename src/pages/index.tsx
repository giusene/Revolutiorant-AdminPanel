import Head from "next/head";
import DefaultButton from "../../ui-kit/DefaultButton/DefaultButton";
import OutlineRoundButton from "../../ui-kit/OutlineRoundButton/OutlineRoundButton";
import DefaultRoundButton from "../../ui-kit/DefaultRoundButton/DefaultRoundButton";
import OutlineButton from "../../ui-kit/OtlineButton/OutlineButton";
import LabelButton from "../../ui-kit/LabelButton/LabelButton";
import RoundLabelButton from "../../ui-kit/RoundLabelButton/RoundLabelButton";
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
        <div className={styles.box}>
          <h3>Outline Round Buttons</h3>
          <OutlineRoundButton label="default" type={LabelType.Default} />
          <OutlineRoundButton label="primary" type={LabelType.Primary} />
          <OutlineRoundButton label="info" type={LabelType.Info} />
          <OutlineRoundButton label="success" type={LabelType.Success} />
          <OutlineRoundButton label="warning" type={LabelType.Warning} />
          <OutlineRoundButton label="danger" type={LabelType.Danger} />
        </div>
        <div className={styles.box}>
          <h3>Default Round Buttons</h3>
          <DefaultRoundButton label="default" type={LabelType.Default} />
          <DefaultRoundButton label="primary" type={LabelType.Primary} />
          <DefaultRoundButton label="info" type={LabelType.Info} />
          <DefaultRoundButton label="success" type={LabelType.Success} />
          <DefaultRoundButton label="warning" type={LabelType.Warning} />
          <DefaultRoundButton label="danger" type={LabelType.Danger} />
        </div>
        <div className={styles.box}>
          <h3>Outline Buttons</h3>
          <OutlineButton label="default" type={LabelType.Default} />
          <OutlineButton label="primary" type={LabelType.Primary} />
          <OutlineButton label="info" type={LabelType.Info} />
          <OutlineButton label="success" type={LabelType.Success} />
          <OutlineButton label="warning" type={LabelType.Warning} />
          <OutlineButton label="danger" type={LabelType.Danger} />
        </div>
        <div className={styles.box}>
          <h3>Button Labels</h3>
          <LabelButton label="primary" type={LabelType.Primary} />
          <LabelButton label="info" type={LabelType.Info} />
          <LabelButton label="success" type={LabelType.Success} />
          <LabelButton label="warning" type={LabelType.Warning} />
          <LabelButton label="danger" type={LabelType.Danger} />
        </div>
        <div className={styles.box}>
          <h3>Round Button Labels</h3>
          <RoundLabelButton label="primary" type={LabelType.Primary} />
          <RoundLabelButton label="info" type={LabelType.Info} />
          <RoundLabelButton label="success" type={LabelType.Success} />
          <RoundLabelButton label="warning" type={LabelType.Warning} />
          <RoundLabelButton label="danger" type={LabelType.Danger} />
        </div>
      </main>
    </>
  );
}
