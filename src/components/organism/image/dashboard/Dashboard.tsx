import { forwardRef } from "react";
import {
  DashboardLayout,
  Row,
  Threshold,
  WrapperButton,
} from "./DashboardStyles";
import ChildButton from "@/components/molecule/childButton/ChildButton";
import InputNumber from "@/components/molecule/inputNumber/InputNumber";
import * as Svg from "@/components/atoms/icon/index";

interface DashboardProps {
  onCreate: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onChangeConf: (e: React.MouseEvent<HTMLDivElement>) => void;
  onChangeConfByInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  downImage: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Dashboard = forwardRef<HTMLInputElement, DashboardProps>(
  (
    { onChangeConf, onChangeConfByInput, onCreate, onKeyDown, downImage },
    ref
  ) => {
    return (
      <DashboardLayout>
        <WrapperButton type="button" onClick={downImage}>
          <ChildButton
            content={""}
            icon={<Svg.Download />}
            isDisabled={false}
          />
        </WrapperButton>
        <Row>
          <Threshold htmlFor="threshold">Threshold</Threshold>
          <InputNumber
            id="threshold"
            ref={ref}
            onChangeConf={onChangeConf}
            onChangeConfByInput={onChangeConfByInput}
            onKeyDown={onKeyDown}
          />
          <WrapperButton type="button" onClick={onCreate}>
            <ChildButton content={"create"} isDisabled={false} />
          </WrapperButton>
        </Row>
      </DashboardLayout>
    );
  }
);

export default Dashboard;
