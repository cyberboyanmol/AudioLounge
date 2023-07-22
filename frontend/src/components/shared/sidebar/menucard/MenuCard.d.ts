interface MenuCardType {
  name: string;
  link: string;
  icon: React.ReactNode;
}

interface MenuCardProps {
  data: MenuCardType;
}
export { MenuCardType, MenuCardProps };
