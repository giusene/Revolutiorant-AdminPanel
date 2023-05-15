export interface SideMenuItem {
  label: string;
  url: string;
  subItem?: SideMenuItem[];
}

export const sideMenu: SideMenuItem[] = [
  {
    label: "dashboard",
    url: "/",
  },
  {
    label: "menu",
    url: "/",
    subItem: [
      {
        label: "categorie",
        url: "/",
      },
      {
        label: "prodotti",
        url: "/",
      },
      {
        label: "aggiunzioni",
        url: "/",
      },
    ],
  },
  {
    label: "tavoli",
    url: "/",
    subItem: [
      {
        label: "sale",
        url: "/",
      },
      {
        label: "agg. tavoli",
        url: "/",
      },
    ],
  },
  {
    label: "ordini",
    url: "/",
    subItem: [
      {
        label: "nuovo ordine",
        url: "/",
      },
    ],
  },
  {
    label: "operatori",
    url: "/",
  },
  {
    label: "clienti",
    url: "/",
  },
  {
    label: "prenotazioni",
    url: "/",
  },
  {
    label: "sconti",
    url: "/",
  },
  {
    label: "statistiche",
    url: "/",
  },
  {
    label: "impostazioni",
    url: "/",
  },
];
