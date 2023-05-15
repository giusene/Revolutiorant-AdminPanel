import styles from "./styles.module.scss";
import { BiMenu } from "react-icons/bi";

const Header = () => {
  return (
    <header className={styles.Header}>
      Logo
      <BiMenu className={styles.hamburger} />
    </header>
  );
};

export default Header;
