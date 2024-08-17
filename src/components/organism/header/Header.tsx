import { Link } from "react-router-dom";
import { DivideHeader, HeaderContainer, Logo } from "./HeaderStyles";
import ActiveMenu from "./activeMenu/ActiveMenu";
import ActiveButton from "../../molecule/activeButton/ActiveButton";
import { useCloseOut } from "@/hooks/useCloseOut";
import { useRef, useState } from "react";

const Header = () => {
  const outSideRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => setIsActive((prev) => !prev);
  useCloseOut(outSideRef, toggleActive);

  return (
    <HeaderContainer>
      <Link to="/">
        <Logo>STEMS</Logo>
      </Link>
      <DivideHeader ref={outSideRef}>
        <ActiveButton
          content={["MENU", "CLOSE"]}
          isActive={isActive}
          activeClick={toggleActive}
        />
        <ActiveMenu
          isActive={isActive}
          activeClick={() => setIsActive(false)}
        />
      </DivideHeader>
    </HeaderContainer>
  );
};

export default Header;
