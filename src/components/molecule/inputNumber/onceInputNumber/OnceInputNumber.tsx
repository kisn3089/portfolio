import {
  CenterLine,
  ClearButton,
  InfoContent,
  InfoLayout,
  Line,
  OnceInfoInput,
  ShortcutWrapper,
  ThresholdInfoWrapper,
} from "./OnceInputNumberStyles";
import { useStorage } from "@/hooks/useStorage";

const OnceInputNumber = () => {
  const { isFirst, onSetStorage, onDeleteStorage } = useStorage("image");
  if (isFirst) return <></>;
  return (
    <OnceInfoInput>
      <Line />
      <InfoLayout>
        <ThresholdInfoWrapper>
          <InfoContent>Threshold [default]: 0</InfoContent>
          <InfoContent className="ko">
            값이 낮을수록 흑백에 가까워집니다.
          </InfoContent>
        </ThresholdInfoWrapper>
        <CenterLine />
        <ShortcutWrapper>
          <InfoContent>Enter: Create Image</InfoContent>
          <InfoContent>⌘ + Enter: Image Download</InfoContent>
          <InfoContent>Ctrl + Enter: Image Download</InfoContent>
          <ClearButton onClick={() => onSetStorage("image")}>check</ClearButton>
        </ShortcutWrapper>
      </InfoLayout>
    </OnceInfoInput>
  );
};

export default OnceInputNumber;
