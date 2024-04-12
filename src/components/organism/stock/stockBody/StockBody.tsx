import React from "react";
import { StockBodyContainer } from "./StockBodyStyle";
import StockList, { StockListProps } from "../stockList/StockList";
import StockDetail from "../stockDetail/StockDetail";
import StockChart from "../stockChart/StockChart";
import { useStockDetail } from "@/hooks/useStockDetail";
import Modal from "@/components/molecule/modal/Modal";
import { StockChartContainer } from "../stockChart/StockChartStyle";

interface StockBodyProps extends Omit<StockListProps, "fetchDetail"> {}

const StockBody = ({
  currentDate,
  pagenation,
  fetchSearchValue,
  isInit,
  footerClick,
  clickChangeDate,
}: StockBodyProps) => {
  const { detailStock, showModal, fetchDetail, closeModal } = useStockDetail();
  return (
    <StockBodyContainer>
      <StockChartContainer>
        <StockChart detailStock={detailStock} currentDate={currentDate} />
      </StockChartContainer>
      <StockDetail detailStock={detailStock} />
      <StockList
        currentDate={currentDate}
        pagenation={pagenation}
        fetchSearchValue={fetchSearchValue}
        isInit={isInit}
        footerClick={footerClick}
        fetchDetail={fetchDetail}
        clickChangeDate={clickChangeDate}
      />
      {/* {showModal && ( */}
      <Modal
        showModal={showModal}
        detailStock={detailStock}
        currentDate={currentDate}
        closeModal={closeModal}
      />
      {/* )} */}
    </StockBodyContainer>
  );
};

export default StockBody;
