import { Dispatch, useState } from "react";
import { SideMenuItem } from "../../../../data/sideMenu";
import styles from "./styles.module.scss";
import { BiChevronRight } from "react-icons/bi";
import {
  RiDashboardFill,
  RiSurveyFill,
  RiRestaurantFill,
  RiPagesFill,
  RiGroupFill,
  RiTeamFill,
  RiContactsFill,
  RiCouponLine,
  RiNumbersFill,
  RiSettings5Line,
} from "react-icons/ri";

const SideMenuItem = (props: {
  item: SideMenuItem;
  active: number | undefined;
  index: number;
  setActive: Dispatch<React.SetStateAction<number | undefined>>;
}) => {
  const [show, setShow] = useState(false);
  const { active, setActive, index } = props;
  const { label, url, subItem } = props.item;
  const itemClick = (index: number) => {
    setShow(!show);
    setActive(index);
  };
  const iconMenu = () => {
    switch (label) {
      case "dashboard":
        return <RiDashboardFill />;
      case "menu":
        return <RiPagesFill />;
      case "tavoli":
        return <RiRestaurantFill />;
      case "ordini":
        return <RiSurveyFill />;
      case "operatori":
        return <RiGroupFill />;
      case "clienti":
        return <RiTeamFill />;
      case "prenotazioni":
        return <RiContactsFill />;
      case "sconti":
        return <RiCouponLine />;
      case "statistiche":
        return <RiNumbersFill />;
      case "impostazioni":
        return <RiSettings5Line />;
    }
  };
  return (
    <>
      <div
        onClick={() => itemClick(index)}
        className={`${styles.SideMenuItem} ${
          active === index || (show && subItem) ? styles.active : ""
        }`}
      >
        {iconMenu()}
        <p className={styles.label}>{label}</p>

        <BiChevronRight
          className={`${styles.arrow} ${show && subItem ? styles.active : ""}`}
        />
      </div>
      {subItem && (
        <div className={`${styles.SubContainer} ${show ? styles.show : ""}`}>
          {subItem.map((item, i) => (
            <div key={i} className={styles.subItems}>
              {item.label}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default SideMenuItem;
