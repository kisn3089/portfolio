import { forwardRef } from "react";
import { DashboardLayout, Row, WrapperButton } from "./DashboardStyles";
import ChildButton from "@/components/molecule/childButton/ChildButton";
import InputNumber from "@/components/molecule/inputNumber/InputNumber";
import * as Svg from "@/components/atoms/icon/index";

interface DashboardProps {
  createSrc: string;
  onCreate: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onChangeConf: (e: React.MouseEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Dashboard = forwardRef<HTMLInputElement, DashboardProps>(
  ({ createSrc, onChangeConf, onCreate, onKeyDown }, ref) => {
    return (
      <DashboardLayout>
        <Row>
          <InputNumber
            ref={ref}
            onChangeConf={onChangeConf}
            onKeyDown={onKeyDown}
          />
          <WrapperButton type="button" onClick={onCreate}>
            <ChildButton content={"create"} isDisabled={false} />
          </WrapperButton>
        </Row>
        <a href={createSrc} download="create_image" id="download">
          <WrapperButton type="button">
            <ChildButton
              content={"download"}
              icon={<Svg.Download />}
              isDisabled={false}
            />
          </WrapperButton>
        </a>
      </DashboardLayout>
    );
  }
);

export default Dashboard;
