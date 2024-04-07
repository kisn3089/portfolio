import React from "react";
import { StockBodyContainer } from "./StockBodyStyle";
import StockList, { StockListProps } from "../stockList/StockList";
import StockDetail from "../stockDetail/StockDetail";
import StockChart from "../stockChart/StockChart";

interface StockBodyProps extends StockListProps {}

const StockBody = ({ pagenation, footerClick }: StockBodyProps) => {
  console.log(pagenation);

  return (
    <StockBodyContainer>
      <StockChart />
      <StockDetail />
      <StockList pagenation={pagenation} footerClick={footerClick} />
    </StockBodyContainer>
  );
};

export default StockBody;
