import { forwardRef } from "react";
import { DashboardLayout, Row } from "./DashboardStyles";
import ChildButton from "@/components/molecule/childButton/ChildButton";
import InputNumber from "@/components/molecule/inputNumber/InputNumber";

interface DashboardProps {
  onChangeConf: (e: React.MouseEvent<HTMLInputElement>) => void;
}

const Dashboard = forwardRef<HTMLInputElement, DashboardProps>(
  ({ onChangeConf }, ref) => {
    return (
      <DashboardLayout>
        <Row>
          <InputNumber ref={ref} onChangeConf={onChangeConf} />
          <ChildButton content={"create"} isDisabled={false} />
        </Row>
        <ChildButton content={"download"} isDisabled={false} />
      </DashboardLayout>
    );
  }
);

export default Dashboard;
