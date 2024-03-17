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
  content: string;
  isActive: boolean;
  width?: string;
  activeClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  return (
    <ActiveButtonContainer
      $width={width}
      $isActive={isActive}
      onClick={activeClick}>
      <Content>{content}</Content>
      <ArrowRight>
        <Dot />
        <Dot />
      </ArrowRight>
    </ActiveButtonContainer>
  );
};

export default ActiveButton;
