import React from "react";
import { HasReadyContainer } from "./HasReadyStyles";

interface HasReadyProps {
  children: React.ReactNode;
}

const HasReady = ({ children }: HasReadyProps) => {
  return <HasReadyContainer>{children}</HasReadyContainer>;
};

export default HasReady;
