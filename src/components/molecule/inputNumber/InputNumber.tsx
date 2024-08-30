import { HTMLAttributes, forwardRef } from "react";
import {
  ArrowContainer,
  Center,
  InputLayout,
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
          defaultValue={1}
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
      </InputLayout>
    );
  }
);

export default InputNumber;
