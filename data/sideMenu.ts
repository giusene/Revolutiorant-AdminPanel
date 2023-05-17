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
    url: "/menu",
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
    url: "/tavoli",
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
    url: "/ordini",
    subItem: [
      {
        label: "nuovo ordine",
        url: "/",
      },
    ],
  },
  {
    label: "operatori",
    url: "/operatori",
  },
  {
    label: "clienti",
    url: "/clienti",
  },
  {
    label: "prenotazioni",
    url: "/prenotazioni",
  },
  {
    label: "sconti",
    url: "/sconti",
  },
  {
    label: "statistiche",
    url: "/statistiche",
  },
  {
    label: "impostazioni",
    url: "/impostazioni",
  },
];
