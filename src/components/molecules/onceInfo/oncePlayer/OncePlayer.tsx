import { useStorage } from "@/hooks/useStorage";
import { ClearButton } from "../onceInputNumber/OnceInputNumberStyles";
import { OnceContent, OnceInfoLayout } from "./OncePlayerStyles";
import * as Svg from "@/components/atoms/icon/index";
import { QuestionInfo } from "../questionInfo/QuestionInfo";

const OncePlayer = () => {
  const STORAGE_KEY = "video";
  const { isFirst, onSetStorage, onDeleteStorage } = useStorage(STORAGE_KEY);
  if (isFirst)
    return (
      <QuestionInfo
        storageKey={STORAGE_KEY}
        onDeleteStorage={onDeleteStorage}
      />
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
      <ClearButton onClick={() => onSetStorage(STORAGE_KEY)}>check</ClearButton>
    </OnceInfoLayout>
  );
};

export default OncePlayer;
