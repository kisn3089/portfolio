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
  return (
    <ActiveMenuContainer $isActive={isActive}>
      {menuItems.map((item, i) => (
        <Link key={i} to={item.url}>
          <MenuItemContainer>
            <ActiveButton
              content={item.content}
              width="90%"
              isActive={false}
              activeClick={activeClick}
            />
          </MenuItemContainer>
        </Link>
      ))}
    </ActiveMenuContainer>
  );
};

export default ActiveMenu;
