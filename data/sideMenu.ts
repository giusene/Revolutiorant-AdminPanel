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

export interface SideMenuSubItem {
  label: string;
  url: string;
}
export interface SideMenuItem {
  label: string;
  url: string;
  subItem?: SideMenuSubItem[];
  MenuIcon: IconType;
}

export const sideMenu: SideMenuItem[] = [
  {
    label: "dashboard",
    url: "/",
    MenuIcon: RiDashboardFill,
  },
  {
    label: "menu",
    url: "/menu",
    MenuIcon: RiPagesFill,
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
    MenuIcon: RiRestaurantFill,
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
    MenuIcon: RiSurveyFill,
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
    MenuIcon: RiGroupFill,
  },
  {
    label: "clienti",
    url: "/clienti",
    MenuIcon: RiTeamFill,
  },
  {
    label: "prenotazioni",
    url: "/prenotazioni",
    MenuIcon: RiContactsFill,
  },
  {
    label: "sconti",
    url: "/sconti",
    MenuIcon: RiCouponLine,
  },
  {
    label: "statistiche",
    url: "/statistiche",
    MenuIcon: RiNumbersFill,
  },
  {
    label: "impostazioni",
    url: "/impostazioni",
    MenuIcon: RiSettings5Line,
  },
];
