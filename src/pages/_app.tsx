import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import styles from "./../styles/app.module.scss";
import Header from "@/components/Header/Header";
import SideMenu from "@/components/SideMenu/SideMenu";
import Footer from "@/components/Footer/Footer";
import PageTitle from "@/components/PageTitle/PageTitle";
import { useState } from "react";
import { wrapper } from "@/store/store";

 function App({ Component, pageProps }: AppProps) {
  const [viewMenu, setViewMenu] = useState<boolean>(false);
  const toggleMenu = () => {
    setViewMenu((prev: boolean) => !prev);
  };
  return (
    <main className={styles.Main}>
      <Header toggle={toggleMenu} />
      <div className={styles.content}>
        <div className={`${styles.sidebar} ${viewMenu ? styles.mobile : ""}`}>
          <SideMenu mobile={viewMenu} />
        </div>

        <div className={styles.pages}>
          <PageTitle />
          <div className={styles.page}>
            <Component {...pageProps} />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default wrapper.withRedux(App);
