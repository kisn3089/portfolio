import React from "react";
import { NoDataLayout } from "./NoDataStyles";

const NoData = ({ content }: { content: string }) => {
  return <NoDataLayout>{content}</NoDataLayout>;
};

export default NoData;
