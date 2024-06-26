import { forwardRef } from "react";
import {
  ArrowContainer,
  Center,
  DashboardLayout,
  InputLayout,
  RGBInput,
} from "./DashboardStyles";
import * as Svg from "@/components/atoms/icon/index";
import ChildButton from "@/components/molecule/childButton/ChildButton";

interface DashboardProps {
  onChangeConf: (e: React.MouseEvent<HTMLInputElement>) => void;
}

const Dashboard = forwardRef<HTMLInputElement, DashboardProps>(
  ({ onChangeConf }, ref) => {
    return (
      <DashboardLayout>
        {/* Module */}
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
        {/*  */}
        <ChildButton content={"create"} isDisabled={false} />
      </DashboardLayout>
    );
  }
);

export default Dashboard;
