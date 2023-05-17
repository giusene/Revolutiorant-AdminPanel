import { IconType } from "react-icons/lib";
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
export interface SideMenuItem {
  label: string;
  url: string;
  subItem?: SideMenuItem[];
  Icon?: IconType;
}

export const sideMenu: SideMenuItem[] = [
  {
    label: "dashboard",
    url: "/",
    Icon: RiDashboardFill,
  },
  {
    label: "menu",
    url: "/menu",
    Icon: RiPagesFill,
    subItem: [
      {
        label: "categorie",
        url: "/categorie",
      },
      {
        label: "prodotti",
        url: "/prodotti",
      },
      {
        label: "aggiunzioni",
        url: "/aggiunzioni",
      },
    ],
  },
  {
    label: "tavoli",
    url: "/tavoli",
    Icon: RiRestaurantFill,
    subItem: [
      {
        label: "sale",
        url: "/sale",
      },
      {
        label: "agg. tavoli",
        url: "/aggiungi",
      },
    ],
  },
  {
    label: "ordini",
    url: "/ordini",
    Icon: RiSurveyFill,
    subItem: [
      {
        label: "nuovo ordine",
        url: "/nuovo",
      },
    ],
  },
  {
    label: "operatori",
    url: "/operatori",
    Icon: RiGroupFill,
  },
  {
    label: "clienti",
    url: "/clienti",
    Icon: RiTeamFill,
  },
  {
    label: "prenotazioni",
    url: "/prenotazioni",
    Icon: RiContactsFill,
  },
  {
    label: "sconti",
    url: "/sconti",
    Icon: RiCouponLine,
  },
  {
    label: "statistiche",
    url: "/statistiche",
    Icon: RiNumbersFill,
  },
  {
    label: "impostazioni",
    url: "/impostazioni",
    Icon: RiSettings5Line,
  },
];
