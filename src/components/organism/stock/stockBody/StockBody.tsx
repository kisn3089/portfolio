import React from "react";
import { StockBodyContainer } from "./StockBodyStyle";
import StockList from "../stockList/StockList";

const StockBody = () => {
  return (
    <StockBodyContainer>
      <StockList />
    </StockBodyContainer>
  );
};

export default StockBody;
