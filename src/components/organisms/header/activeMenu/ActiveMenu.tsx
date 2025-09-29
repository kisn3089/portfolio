import { Link } from "react-router-dom";
import { ActiveMenuContainer, MenuItemContainer } from "./ActiveMenuStyles";
import ActiveButton from "@/components/molecules/activeButton/ActiveButton";

const menuItems = [
  { content: ["HOME", "HOME"], url: "/" },
  {
    content: ["ABOUT ME", "ABOUT ME"],
    url: "external",
  },
  { content: ["PROJECT", "PROJECT"], url: "/project" },
];

type ActiveMenuProps = {
  isActive: boolean;
  activeClick: () => void;
};

const externalOpen = (url: string) =>
  url === "external" &&
  window.open(
    "https://halved-crepe-e7c.notion.site/08f937f7f1f04efe811e51282f33b884?pvs=74"
  );

const blockExternal = (url: string) =>
  url === "external" ? window.location.pathname : url;

const ActiveMenu = ({ isActive, activeClick }: ActiveMenuProps) => {
  return (
    <ActiveMenuContainer className={`${isActive && "isActive"}`}>
      {[...menuItems].map((item, i) => (
        <Link
          key={i}
          to={blockExternal(item.url)}
          onClick={() => externalOpen(item.url)}>
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
