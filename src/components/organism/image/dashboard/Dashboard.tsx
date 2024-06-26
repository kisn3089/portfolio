import { forwardRef } from "react";
import { DashboardLayout, Row, WrapperButton } from "./DashboardStyles";
import ChildButton from "@/components/molecule/childButton/ChildButton";
import InputNumber from "@/components/molecule/inputNumber/InputNumber";
import * as Svg from "@/components/atoms/icon/index";

interface DashboardProps {
  onCreate: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onChangeConf: (e: React.MouseEvent<HTMLInputElement>) => void;
  onDownload: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Dashboard = forwardRef<HTMLInputElement, DashboardProps>(
  ({ onChangeConf, onCreate, onDownload }, ref) => {
    return (
      <DashboardLayout>
        <Row>
          <InputNumber ref={ref} onChangeConf={onChangeConf} />
          <WrapperButton type="button" onClick={onCreate}>
            <ChildButton content={"create"} isDisabled={false} />
          </WrapperButton>
        </Row>
        <WrapperButton type="button" onClick={onDownload}>
          <ChildButton
            content={"download"}
            icon={<Svg.Download />}
            isDisabled={false}
          />
        </WrapperButton>
      </DashboardLayout>
    );
  }
);

export default Dashboard;
