import { forwardRef } from "react";
import {
  ArrowContainer,
  Center,
  InputLayout,
  RGBInput,
} from "./InputNumberStyles";
import * as Svg from "@/components/atoms/icon/index";

interface InputNumberProps {
  onChangeConf: (e: React.MouseEvent<HTMLInputElement>) => void;
}

const InputNumber = forwardRef<HTMLInputElement, InputNumberProps>(
  ({ onChangeConf }, ref) => {
    return (
      <InputLayout>
        <RGBInput ref={ref} type="number" defaultValue={0} />
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
