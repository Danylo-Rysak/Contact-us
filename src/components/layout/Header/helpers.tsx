interface MenuItems {
  name: string;
  isActive: boolean;
  isIcon?: boolean;
}

export const menuItems: Array<MenuItems> = [
  { name: 'Home', isActive: false },
  { name: 'Features', isActive: false, isIcon: true },
  { name: 'Blog', isActive: false },
  { name: 'Shop', isActive: false },
  { name: 'About', isActive: false },
  { name: 'Contact', isActive: false },
];
