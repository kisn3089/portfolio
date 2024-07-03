import { useStorage } from "@/hooks/useStorage";
import { ClearButton } from "../onceInputNumber/OnceInputNumberStyles";
import {
  OnceContent,
  OnceInfoLayout,
  QuestionLayout,
} from "./OncePlayerStyles";
import * as Svg from "@/components/atoms/icon/index";

const OncePlayer = () => {
  const { isFirst, onSetStorage, onDeleteStorage } = useStorage("video");
  if (isFirst)
    return (
      <QuestionLayout>
        <Svg.Information />{" "}
      </QuestionLayout>
    );
  return (
    <OnceInfoLayout>
      <OnceContent className="ko">
        <Svg.Marker />
        {"마커를 원하시는 구간에 찍어주세요. (최대 2개)"}
      </OnceContent>
      <OnceContent className="ko">
        <Svg.RemoveMarker />
        {"마커를 제거합니다."}
      </OnceContent>
      <OnceContent className="ko">
        <Svg.Prev />
        <Svg.Next />
        {"이전, 다음 구간으로 재생을 이동합니다."}
      </OnceContent>
      <ClearButton onClick={() => onSetStorage("video")}>check</ClearButton>
    </OnceInfoLayout>
  );
};

export default OncePlayer;
