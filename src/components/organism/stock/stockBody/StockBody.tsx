import React from "react";
import { StockBodyContainer } from "./StockBodyStyle";
import StockList, { StockListProps } from "../stockList/StockList";
import StockDetail from "../stockDetail/StockDetail";
import StockChart from "../stockChart/StockChart";
import { useStockDetail } from "@/hooks/useStockDetail";

interface StockBodyProps extends Omit<StockListProps, "fetchDetail"> {}

const StockBody = ({
  currentDate,
  searchValue,
  pagenation,
  footerClick,
  clickChangeDate,
}: StockBodyProps) => {
  const { detailCode, fetchDetail } = useStockDetail();
  return (
    <StockBodyContainer>
      <StockChart detailCode={detailCode} />
      <StockDetail detailCode={detailCode} />
      <StockList
        currentDate={currentDate}
        searchValue={searchValue}
        pagenation={pagenation}
        footerClick={footerClick}
        fetchDetail={fetchDetail}
        clickChangeDate={clickChangeDate}
      />
    </StockBodyContainer>
  );
};

export default StockBody;
