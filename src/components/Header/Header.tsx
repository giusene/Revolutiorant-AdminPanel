import styles from "./styles.module.scss";
import Logo from "../Logo/Logo";
import { BiMenu } from "react-icons/bi";

const Header = (props: { toggle: () => void }) => {
  const { toggle } = props;
  return (
    <header className={styles.Header}>
      <Logo />
      <BiMenu onClick={toggle} className={styles.hamburger} />
    </header>
  );
};

export default Header;
