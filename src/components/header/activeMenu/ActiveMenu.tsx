import { ActiveMenuContainer, MenuItemContainer } from "./ActiveMenuStyles";
import ActiveButton from "@/components/activeButton/ActiveButton";
import { useNavigate } from "react-router-dom";

const menuItems = [
  { content: "HOME", url: "/" },
  { content: "ABOUT ME", url: "/" },
  { content: "PROJECT", url: "/" },
];

const ActiveMenu = ({ isActive }: { isActive: boolean }) => {
  const navigate = useNavigate();
  return (
    <ActiveMenuContainer $isActive={isActive}>
      {menuItems.map((item, i) => (
        <MenuItemContainer key={i}>
          <ActiveButton
            content={item.content}
            width="90%"
            isActive={false}
            activeClick={() => navigate(item.url)}
          />
        </MenuItemContainer>
      ))}
    </ActiveMenuContainer>
  );
};

export default ActiveMenu;
