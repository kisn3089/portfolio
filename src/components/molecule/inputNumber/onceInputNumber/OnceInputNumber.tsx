import {
  ClearButton,
  InfoContent,
  InfoLayout,
  Line,
  OnceInfoInput,
} from "./OnceInputNumberStyles";
import { useStorage } from "@/hooks/useStorage";

const OnceInputNumber = () => {
  const { isFirst, onSetStorage, onDeleteStorage } = useStorage("image");
  if (isFirst) return <></>;
  return (
    <OnceInfoInput>
      <Line />
      <InfoLayout>
        <InfoContent>Enter: Create Image</InfoContent>
        <InfoContent>⌘ + Enter: Image Download</InfoContent>
        <InfoContent>ctrl + Enter: Image Download</InfoContent>
        <ClearButton onClick={() => onSetStorage("image")}>check</ClearButton>
      </InfoLayout>
    </OnceInfoInput>
  );
};

export default OnceInputNumber;
