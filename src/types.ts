type SideMenuItem = {
  title: string;
  url: string;
  icon?: React.ReactNode;
};

export type SideMenu = {
  title: string;
  list: SideMenuItem[];
};
