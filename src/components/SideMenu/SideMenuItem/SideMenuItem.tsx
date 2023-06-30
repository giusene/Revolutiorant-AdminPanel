import { Dispatch, useState } from "react";
import { SideMenuItem } from "../../../../data/sideMenu";
import styles from "./styles.module.scss";
import { BiChevronRight } from "react-icons/bi";
import { useRouter } from "next/router";

const SideMenuItem = (props: {
  mobile: boolean;
  item: SideMenuItem;
  active: number | undefined;
  index: number;
  setActive: Dispatch<React.SetStateAction<number | undefined>>;
}) => {
  const [show, setShow] = useState(false);
  const [menuOpen, setMenuOpen] = useState(null);
  const { active, setActive, index, mobile } = props;
  const { label, url, MenuIcon, subItem } = props.item;

  const router = useRouter();

  const itemClick = (index: any) => {
    setShow(!show);
    setActive(index);
    navigation(url);
    if (mobile && menuOpen === index) {
      setMenuOpen(null);
    } else {
      setMenuOpen(index);
    }
  };

  const navigation = (urlPath: string) => {
    router.push(urlPath);
  };

  return (
    <div className={styles.main}>
      <div
        onClick={() => itemClick(index)}
        className={`${styles.SideMenuItem} ${
          active === index || (show && subItem) ? styles.active : ""
        } `}
      >
        <MenuIcon className={`${mobile ? styles.mobile_icon : ""}`} />
        <p className={`${styles.label} ${mobile ? styles.mobile : ""}`}>
          {label}
        </p>

        <BiChevronRight
          className={`${styles.arrow} ${
            show && subItem && menuOpen === active ? styles.active : ""
          } ${mobile ? styles.mobile : ""}`}
        />
      </div>
      {subItem && (
        <div
          className={`${styles.SubContainer} ${show ? styles.show : ""} ${
            mobile ? styles.mobile : ""
          } ${menuOpen === active ? styles.open : styles.closed}`}
        >
          {subItem.map((item, i) => (
            <div
              key={i}
              className={styles.subItems}
              onClick={() => navigation(url + item.url)}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SideMenuItem;
