import React from "react";
import { StockBodyContainer } from "./StockBodyStyle";
import StockList, { StockListProps } from "../stockList/StockList";
import StockDetail from "../stockDetail/StockDetail";
import StockChart from "../stockChart/StockChart";

interface StockBodyProps extends StockListProps {}

const StockBody = ({ pagenation, plusClick }: StockBodyProps) => {
  return (
    <StockBodyContainer>
      <StockChart />
      <StockDetail />
      <StockList pagenation={pagenation} plusClick={plusClick} />
    </StockBodyContainer>
  );
};

export default StockBody;
