import React from "react";
import { ErrorConent, ErrorLayout } from "./ShowErrorStyles";
import { ConverStepType } from "@/types/convertStep.type";

interface ShowErrorProps {
  children?: React.ReactNode;
  errorContent: ConverStepType;
}

const ShowError = ({ children, errorContent }: ShowErrorProps) => {
  if (errorContent.step === "error")
    return (
      <ErrorLayout>
        <ErrorConent>{errorContent.msg}</ErrorConent>
      </ErrorLayout>
    );
  // return <>{children}</>;
};

export default ShowError;
