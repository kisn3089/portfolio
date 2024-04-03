import { Link } from "react-router-dom";
import { DivideHeader, HeaderContainer, Logo } from "./HeaderStyles";
import ActiveMenu from "./activeMenu/ActiveMenu";
import ActiveButton from "../../molecule/activeButton/ActiveButton";

interface IHeader {
  isActive: boolean;
  toggleActive: (e: React.MouseEvent) => void;
}

const Header = ({ isActive, toggleActive }: IHeader) => {
  return (
    <HeaderContainer>
      <Link to="/">
        <Logo>STEMS</Logo>
      </Link>
      <DivideHeader>
        <ActiveButton
          content={["MENU", "CLOSE"]}
          isActive={isActive}
          activeClick={toggleActive}
        />
        <ActiveMenu isActive={isActive} />
      </DivideHeader>
    </HeaderContainer>
  );
};

export default Header;
