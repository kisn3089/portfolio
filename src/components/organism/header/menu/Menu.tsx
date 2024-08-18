import React, { useState } from "react";
import { DivideHeader } from "../HeaderStyles";
import ActiveButton from "@/components/molecule/activeButton/ActiveButton";
import ActiveMenu from "../activeMenu/ActiveMenu";
import { useCloseOut } from "@/hooks/useCloseOut";

const Menu = () => {
  const [isActive, setIsActive] = useState(false);
  const toggleActive = () => setIsActive((prev) => !prev);

  const outRef = useCloseOut<HTMLDivElement>(toggleActive, isActive === true);

  return (
    <DivideHeader ref={outRef}>
      <ActiveButton
        content={["MENU", "CLOSE"]}
        isActive={isActive}
        activeClick={toggleActive}
      />
      <ActiveMenu isActive={isActive} activeClick={toggleActive} />
    </DivideHeader>
  );
};

export default Menu;
