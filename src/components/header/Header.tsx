import { Link } from "react-router-dom";
import {
  ArrowRight,
  Dot,
  HeaderContainer,
  Logo,
  Menu,
  MenuContainer,
} from "./HeaderStyles";

const Header = () => {
  const isOpen = true;
  return (
    <HeaderContainer>
      <Link to="/">
        <Logo>STEMS</Logo>
      </Link>
      <MenuContainer>
        <Menu>MENU</Menu>
        <ArrowRight>
          <Dot />
          <Dot />
        </ArrowRight>
      </MenuContainer>
    </HeaderContainer>
  );
};

export default Header;
