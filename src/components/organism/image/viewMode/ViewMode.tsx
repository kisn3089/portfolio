import React from "react";
import { DashboardLayout } from "./ViewModeStyles";
import { TFitType } from "@/hooks/useImage";

interface ViewModeProps {
  fitType: TFitType;
  onChangeType: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ViewMode = ({ fitType, onChangeType }: ViewModeProps) => {
  return (
    <DashboardLayout>
      <label htmlFor="cover">Cover</label>
      <input
        type="radio"
        id="cover"
        value={"cover"}
        checked={fitType === "cover"}
        onChange={onChangeType}
      />
      <label htmlFor="contain">contain</label>
      <input
        type="radio"
        id="contain"
        value={"contain"}
        checked={fitType === "contain"}
        onChange={onChangeType}
      />
    </DashboardLayout>
  );
};

export default ViewMode;
