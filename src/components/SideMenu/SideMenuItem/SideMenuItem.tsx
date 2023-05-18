import { Dispatch, useState } from "react";
import { SideMenuItem } from "../../../../data/sideMenu";
import styles from "./styles.module.scss";
import { BiChevronRight } from "react-icons/bi";
import { useRouter } from "next/router";

const SideMenuItem = (props: {
  item: SideMenuItem;
  active: number | undefined;
  index: number;
  setActive: Dispatch<React.SetStateAction<number | undefined>>;
}) => {
  const [show, setShow] = useState(false);
  const { active, setActive, index } = props;
  const { label, url, MenuIcon, subItem } = props.item;
  const router = useRouter();

  const itemClick = (index: number) => {
    setShow(!show);
    setActive(index);
    navigation(url);
  };

  const navigation = (urlPath: string) => {
    router.push(urlPath);
  };

  return (
    <>
      <div
        onClick={() => itemClick(index)}
        className={`${styles.SideMenuItem} ${
          active === index || (show && subItem) ? styles.active : ""
        }`}
      >
        <MenuIcon />
        <p className={styles.label}>{label}</p>

        <BiChevronRight
          className={`${styles.arrow} ${show && subItem ? styles.active : ""}`}
        />
      </div>
      {subItem && (
        <div className={`${styles.SubContainer} ${show ? styles.show : ""}`}>
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
    </>
  );
};

export default SideMenuItem;
