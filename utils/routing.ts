import { sideMenu } from "../data/sideMenu";

export const getPageName = (url: string): string => {
  let label: string | undefined = undefined;
  sideMenu.map(item => {
    if (item.url === url) return (label = item.label);
    else {
      item.subItem?.map(subItem => {
        if (item.url + subItem.url === url)
          return (label = item.label + " ▸ " + subItem.label);
      });
      return label;
    }
  });
  return label || "404";
};
