import React from "react";
import {
  ArrowRight,
  Dot,
  Content,
  ActiveButtonContainer,
} from "./ActiveButtonStyles";

type ActiveButtonProps = {
  content: string[];
  isActive: boolean;
  width?: boolean;
  activeClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const ActiveButton = ({
  content,
  isActive,
  width,
  activeClick,
}: ActiveButtonProps) => {
  const [current, after] = content;

  return (
    <ActiveButtonContainer
      className={`${(width && "width") || (isActive && "isActive")}`}
      onClick={activeClick}>
      <Content className={isActive ? "isActive" : ""}>
        <span className={`default`}>{current}</span>
        <span className={`active`}>{after}</span>
      </Content>
      <ArrowRight>
        <Dot />
        <Dot />
      </ArrowRight>
    </ActiveButtonContainer>
  );
};

export default ActiveButton;
