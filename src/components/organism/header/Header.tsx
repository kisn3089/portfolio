import { Link } from "react-router-dom";
import { HeaderContainer, Logo } from "./HeaderStyles";
import Menu from "./menu/Menu";

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <Logo>STEMS</Logo>
      </Link>
      <Menu />
    </HeaderContainer>
  );
};

export default Header;
