import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import styles from "./../styles/app.module.scss";
import Header from "@/components/Header/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={styles.Main}>
      <Header />
      <div className={styles.content}>
        <div className={styles.sidebar}>sidebar</div>
        <div className={styles.pages}>
          <div className={styles.breadcrumbs}>page title + breadcrumbs?</div>
          <div className={styles.page}>
            <Component {...pageProps} />
          </div>
        </div>
      </div>
      <div>footer</div>
    </main>
  );
}
