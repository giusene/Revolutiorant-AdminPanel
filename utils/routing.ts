import { sideMenu } from "../data/sideMenu";

export const getPageName = (path: string): string => {
  const menuItem = sideMenu.find(item => item.url === path);
  return menuItem?.label || "404";
};
