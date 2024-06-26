import React from "react";
import {
  ArrowRight,
  Dot,
  Content,
  ActiveButtonContainer,
} from "./ActiveButtonStyles";

const ActiveButton = ({
  content,
  isActive,
  width,
  activeClick,
}: {
  content: string[];
  isActive: boolean;
  width?: string;
  activeClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  const [current, after] = content;
  return (
    <ActiveButtonContainer
      $width={width}
      $isActive={isActive}
      onClick={activeClick}
    >
      <Content $isActive={isActive}>
        <span>{current}</span>
        <span>{after}</span>
      </Content>
      <ArrowRight>
        <Dot />
        <Dot />
      </ArrowRight>
    </ActiveButtonContainer>
  );
};

export default ActiveButton;
