import { Link } from "react-router-dom";
import { ActiveMenuContainer, MenuItemContainer } from "./ActiveMenuStyles";
import ActiveButton from "@/components/molecule/activeButton/ActiveButton";

const menuItems = [
  { content: ["HOME", "HOME"], url: "/" },
  { content: ["ABOUT ME", "ABOUT ME"], url: "/me" },
  { content: ["PROJECT", "PROJECT"], url: "/project" },
];

type ActiveMenuProps = {
  isActive: boolean;
  activeClick: () => void;
};

const ActiveMenu = ({ isActive, activeClick }: ActiveMenuProps) => {
  // const ActiveMenu = () => {
  return (
    <ActiveMenuContainer className={isActive ? "isActive" : ""}>
      {menuItems.map((item, i) => (
        <Link key={i} to={item.url}>
          <MenuItemContainer>
            <ActiveButton
              content={item.content}
              isActive={false}
              activeClick={activeClick}
              width
            />
          </MenuItemContainer>
        </Link>
      ))}
    </ActiveMenuContainer>
  );
};

export default ActiveMenu;
