import { ChildButtonContainer, HvLine, StandText } from "./ChildButtonStyles";

interface IChildButton {
  content: string;
  isDisabled: boolean;
}

const ChildButton = ({ content, isDisabled }: IChildButton) => {
  return (
    <ChildButtonContainer $disabled={isDisabled}>
      <StandText>
        {content}
        <HvLine />
      </StandText>
    </ChildButtonContainer>
  );
};

export default ChildButton;
