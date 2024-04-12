import React from "react";
import { BeforeFetchLayout, InfoText } from "./BeforeFetchStyles";
import * as Svg from "@/components/atoms/icon/index";

const BeforeFetch = ({ content }: { content: string }) => {
  return (
    <BeforeFetchLayout>
      <Svg.StockIcon />
      <InfoText>{content}</InfoText>
    </BeforeFetchLayout>
  );
};

export default BeforeFetch;
