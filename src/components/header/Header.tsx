import { Link } from "react-router-dom";
import { DivideHeader, HeaderContainer, Logo } from "./HeaderStyles";
import ActiveMenu from "./activeMenu/ActiveMenu";
import ActiveButton from "../activeButton/ActiveButton";
import { useState } from "react";

const Header = () => {
  const [isActive, setActive] = useState(false);
  return (
    <HeaderContainer>
      <Link to="/">
        <Logo>STEMS</Logo>
      </Link>
      <DivideHeader>
        <ActiveButton
          content="MENU"
          isActive={isActive}
          activeClick={() => setActive((prev) => !prev)}
        />
        <ActiveMenu isActive={isActive} />
      </DivideHeader>
    </HeaderContainer>
  );
};

export default Header;
