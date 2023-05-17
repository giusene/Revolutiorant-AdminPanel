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
