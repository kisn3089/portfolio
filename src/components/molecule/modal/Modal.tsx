import React from "react";
import {
  Center,
  ChartContainer,
  ModalHeader,
  ModalLayout,
} from "./ModalStyles";
import CheckCondition from "@/lib/util/CheckCondition";
import BeforeFetch from "../beforeFetch/BeforeFetch";
import BaseInfo from "@/components/organism/stock/stockDetail/baseInfo/BaseInfo";
import { AllocationTypes, StockDataTypes } from "@/types/stockData.type";
import * as Svg from "@/components/atoms/icon/index";
import StockChart from "@/components/organism/stock/stockChart/StockChart";
import { theme } from "@/styles/theme";
import DetailInfo from "@/components/organism/stock/stockDetail/detailInfo/DetailInfo";

interface ModalProps {
  showModal: boolean;
  detailStock?: StockDataTypes;
  getStockDetail?: StockDataTypes[];
  allocationData: AllocationTypes;
  allocationFetching: boolean;
  isFetching: boolean;
  closeModal: (e: React.MouseEvent | React.TouchEvent) => void;
}

const Modal = ({
  showModal,
  detailStock,
  getStockDetail,
  allocationFetching,
  allocationData,
  isFetching,
  closeModal,
}: ModalProps) => {
  return (
    <ModalLayout $showModal={showModal}>
      <ModalHeader>
        <Svg.Close onClick={closeModal} />
      </ModalHeader>
      <Center>
        <ChartContainer>
          <StockChart
            getStockDetail={getStockDetail}
            isFetching={isFetching}
            detailStock={detailStock}
            bgColor={theme.palette.black}
          />
        </ChartContainer>
        <CheckCondition falseCondition={!detailStock}>
          <BeforeFetch
            content="주식 및 배당 정보입니다."
            svg={<Svg.StockList />}
          />
          <DetailInfo
            detailStock={detailStock}
            allocationData={allocationData}
            allocationFetching={allocationFetching}
          />
        </CheckCondition>
      </Center>
    </ModalLayout>
  );
};

export default Modal;
