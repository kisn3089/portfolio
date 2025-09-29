import React from "react";
import { BeforeFetchLayout, InfoText } from "./BeforeFetchStyles";

interface BeforeFetchProps {
  svg: React.ReactNode;
  content: string;
}

const BeforeFetch = ({ content, svg }: BeforeFetchProps) => {
  return (
    <BeforeFetchLayout>
      {svg}
      <InfoText>{content}</InfoText>
    </BeforeFetchLayout>
  );
};

export default BeforeFetch;
