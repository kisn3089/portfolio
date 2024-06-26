import { forwardRef } from "react";
import {
  ArrowContainer,
  Center,
  DashboardLayout,
  InputLayout,
  RGBInput,
} from "./DashboardStyles";
import * as Svg from "@/components/atoms/icon/index";

interface DashboardProps {
  ChangeMeasureValue: (e: React.MouseEvent<HTMLInputElement>) => void;
}

const Dashboard = forwardRef<HTMLInputElement, DashboardProps>(
  ({ ChangeMeasureValue }, ref) => {
    return (
      <DashboardLayout>
        <InputLayout>
          <RGBInput
            ref={ref}
            type="number"
            max={2}
            min={0}
            defaultValue={0.2}
            step={0.1}
          />
          <ArrowContainer>
            <Center id="up" onClick={ChangeMeasureValue}>
              <Svg.ArrowLeft className="up" />
            </Center>
            <Center id="down" onClick={ChangeMeasureValue}>
              <Svg.ArrowLeft className="down" />
            </Center>
          </ArrowContainer>
        </InputLayout>
      </DashboardLayout>
    );
  }
);

export default Dashboard;
