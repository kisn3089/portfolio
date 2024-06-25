import { ArrowContainer, DashboardLayout, RGBInput } from "./DashboardStyles";

interface ViewModeProps {
  onChangeType: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ViewMode = ({ onChangeType }: ViewModeProps) => {
  return (
    <DashboardLayout>
      <RGBInput
        type="number"
        max={2}
        min={0}
        defaultValue={2}
        step={0.1}
      ></RGBInput>
      <ArrowContainer />
    </DashboardLayout>
  );
};

export default ViewMode;
