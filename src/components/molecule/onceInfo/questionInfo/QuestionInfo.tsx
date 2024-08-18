import { StorageKeyType } from "@/types/storageKey.type";
import { QuestionLayout } from "./QuestionInfoStyles";
import * as Svg from "@/components/atoms/icon/index";

interface QuestionInfoProps {
  storageKey: StorageKeyType;
  style?: [x: string, y: string];
  onDeleteStorage: (storageKey: StorageKeyType) => void;
}

export const QuestionInfo = ({
  storageKey,
  style = ["-50px", "0"],
  onDeleteStorage,
}: QuestionInfoProps) => {
  const [x, y] = style;
  return (
    <QuestionLayout $bottom={x} $left={y}>
      <Svg.Information onClick={() => onDeleteStorage(storageKey)} />
    </QuestionLayout>
  );
};
