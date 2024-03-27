import React from "react";
import { SearchContainer, StockHeaderStyle } from "./StockHeaderStyles";
import Input from "@/components/atoms/input/Input";
import * as Svg from "../../../atoms/icon/index";

const StockHeader = () => {
  return (
    <StockHeaderStyle>
      <SearchContainer>
        <Input />
        <Svg.Close />
      </SearchContainer>
    </StockHeaderStyle>
  );
};

export default StockHeader;
