import React from "react";
import { StockBodyContainer } from "./StockBodyStyle";
import StockList from "../stockList/StockList";
import StockDetail from "../stockDetail/StockDetail";
import StockChart from "../stockChart/StockChart";

interface IStockBody {
  plusClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const StockBody = ({ plusClick }: IStockBody) => {
  return (
    <StockBodyContainer>
      <StockChart />
      <StockDetail />
      <StockList plusClick={plusClick} />
    </StockBodyContainer>
  );
};

export default StockBody;
