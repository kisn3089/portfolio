import { ChildButtonContainer, HvLine, StandText } from "./ChildButtonStyles";

interface IChildButton {
  content: string;
  icon?: React.ReactNode;
  isDisabled: boolean;
}

const ChildButton = ({ content, icon, isDisabled }: IChildButton) => {
  return (
    <ChildButtonContainer $disabled={isDisabled}>
      <StandText>
        {icon}
        {content}
        <HvLine />
      </StandText>
    </ChildButtonContainer>
  );
};

export default ChildButton;
