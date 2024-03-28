import React from "react";
import { StockBodyContainer } from "./StockBodyStyle";
import StockList from "../stockList/StockList";
import StockDetail from "../stockDetail/StockDetail";
import StockChart from "../stockChart/StockChart";

const StockBody = () => {
  return (
    <StockBodyContainer>
      <StockChart />
      <StockDetail />
      <StockList />
    </StockBodyContainer>
  );
};

export default StockBody;
