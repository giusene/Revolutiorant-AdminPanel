import styles from "./styles.module.scss";
import { sideMenu } from "../../../data/sideMenu";
import SideMenuItem from "./SideMenuItem/SideMenuItem";
import { useState } from "react";

const SideMenu = () => {
  const [active, setActive] = useState<number | undefined>(undefined);
  return (
    <nav className={styles.SideMenu}>
      {sideMenu.map((item, i) => (
        <SideMenuItem
          key={i}
          index={i}
          active={active}
          setActive={setActive}
          item={item}
        />
      ))}
    </nav>
  );
};

export default SideMenu;
