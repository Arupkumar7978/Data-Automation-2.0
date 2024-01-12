export type MENU_ITEMS_OBJECT_TYPE = {
  id: number;
  name: string;
  icon: React.ReactElement | JSX.Element | React.ReactNode;
  isVisible: boolean;
};

export type MENUS_LIST_TYPE = Array<MENU_ITEMS_OBJECT_TYPE>;

export type CollapsedMenuBarProps = {
  setContent: (name: string) => void;
  currentScreenName: string;
  menuItems: MENUS_LIST_TYPE;
  onMenuItemClick: (
    event: React.MouseEvent<HTMLButtonElement>,
    menuName: string
  ) => void;
};

export type HeaderProps = {
  handleMode: (mode: boolean) => void;
  mode: boolean;
};
