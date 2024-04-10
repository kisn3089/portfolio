import React from "react";
import { StockBodyContainer } from "./StockBodyStyle";
import StockList, { StockListProps } from "../stockList/StockList";
import StockDetail from "../stockDetail/StockDetail";
import StockChart from "../stockChart/StockChart";
import { useStockDetail } from "@/hooks/useStockDetail";

interface StockBodyProps extends Omit<StockListProps, "fetchDetail"> {}

const StockBody = ({
  currentDate,
  pagenation,
  fetchSearchValue,
  footerClick,
  clickChangeDate,
}: StockBodyProps) => {
  const { detailCode, fetchDetail } = useStockDetail();
  return (
    <StockBodyContainer>
      <StockChart detailCode={detailCode} currentDate={currentDate} />
      <StockDetail detailCode={detailCode} />
      <StockList
        currentDate={currentDate}
        pagenation={pagenation}
        fetchSearchValue={fetchSearchValue}
        footerClick={footerClick}
        fetchDetail={fetchDetail}
        clickChangeDate={clickChangeDate}
      />
    </StockBodyContainer>
  );
};

export default StockBody;
