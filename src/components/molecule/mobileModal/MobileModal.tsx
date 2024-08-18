import React from "react";
import {
  Center,
  ChartContainer,
  HeaderModal,
  LayoutMobileModal,
} from "./MobileModalStyles";
import CheckCondition from "@/lib/util/CheckCondition";
import BeforeFetch from "../beforeFetch/BeforeFetch";
import { AllocationTypes, StockDataTypes } from "@/types/stockData.type";
import * as Svg from "@/components/atoms/icon/index";
import StockChart from "@/components/organism/stock/stockChart/StockChart";
import { theme } from "@/styles/theme";
import DetailInfo from "@/components/organism/stock/stockDetail/detailInfo/DetailInfo";

interface ModalProps {
  showModal: boolean;
  detailStock?: StockDataTypes;
  getStockDetail?: StockDataTypes[];
  isFetching: boolean;
  closeModal: (e: React.MouseEvent | React.TouchEvent) => void;
}

const MobileModal = ({
  showModal,
  detailStock,
  getStockDetail,
  isFetching,
  closeModal,
}: ModalProps) => {
  return (
    <LayoutMobileModal $showModal={showModal}>
      <HeaderModal>
        <Svg.Close onClick={closeModal} />
      </HeaderModal>
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
          <DetailInfo detailStock={detailStock} />
        </CheckCondition>
      </Center>
    </LayoutMobileModal>
  );
};

export default MobileModal;
