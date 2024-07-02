import { HTMLAttributes, forwardRef } from "react";
import {
  ArrowContainer,
  Center,
  InputLayout,
  RGBInput,
} from "./InputNumberStyles";
import * as Svg from "@/components/atoms/icon/index";
import OnceInputNumber from "./onceInputNumber/OnceInputNumber";

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
        <OnceInputNumber />
      </InputLayout>
    );
  }
);

export default InputNumber;
