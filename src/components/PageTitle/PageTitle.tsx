import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import { getPageName } from "../../../utils/routing";

const PageTitle = () => {
  const [pageName, setPageName] = useState("");
  const router = useRouter();
  const { pathname } = router;
  useEffect(() => {
    setPageName(getPageName(pathname));
  }, [pathname]);
  return (
    <div className={styles.PageTitle}>
      <p>{pageName}</p>
    </div>
  );
};

export default PageTitle;
