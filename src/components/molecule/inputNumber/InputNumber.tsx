import { HTMLAttributes, forwardRef } from "react";
import {
  ArrowContainer,
  Center,
  InfoContent,
  InfoLayout,
  InputLayout,
  Line,
  OnceInfoInput,
  RGBInput,
} from "./InputNumberStyles";
import * as Svg from "@/components/atoms/icon/index";

interface InputNumberProps extends HTMLAttributes<HTMLInputElement> {
  onChangeConf: (e: React.MouseEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const InputNumber = forwardRef<HTMLInputElement, InputNumberProps>(
  ({ id, onChangeConf, onKeyDown }, ref) => {
    return (
      <InputLayout>
        <RGBInput
          id={id}
          ref={ref}
          type="number"
          step={0.1}
          min={0}
          max={3}
          defaultValue={0}
          onKeyDown={onKeyDown}
        />
        <ArrowContainer>
          <Center id="up" onClick={onChangeConf}>
            <Svg.ArrowLeft className="up" />
          </Center>
          <Center id="down" onClick={onChangeConf}>
            <Svg.ArrowLeft className="down" />
          </Center>
        </ArrowContainer>
        <OnceInfoInput>
          <Line />
          <InfoLayout>
            <InfoContent>Enter: CREATE</InfoContent>
            <InfoContent>⌘ (cmd) + Enter: </InfoContent>
            <InfoContent>
              ctrl + Enter로 이미지 저장할 수 있습니다.{" "}
            </InfoContent>
          </InfoLayout>
        </OnceInfoInput>
      </InputLayout>
    );
  }
);

export default InputNumber;
