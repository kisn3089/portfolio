import React from "react";
import {
  Center,
  ChartContainer,
  ModalHeader,
  ModalLayout,
} from "./ModalStyles";
import CheckCondition from "@/lib/util/CheckCondition";
import BeforeFetch from "../beforeFetch/BeforeFetch";
import { BaseInfoLayout } from "@/components/organism/stock/stockDetail/StockDetailStyle";
import BaseInfo from "@/components/organism/stock/stockDetail/baseInfo/BaseInfo";
import { StockDataTypes } from "@/types/stockData.type";
import * as Svg from "@/components/atoms/icon/index";
import StockChart from "@/components/organism/stock/stockChart/StockChart";

interface ModalProps {
  showModal: boolean;
  detailStock?: StockDataTypes;
  currentDate: Date;
  closeModal: (e: React.MouseEvent | React.TouchEvent) => void;
}

const Modal = ({
  showModal,
  detailStock,
  currentDate,
  closeModal,
}: ModalProps) => {
  return (
    <ModalLayout $showModal={showModal}>
      <ModalHeader>
        <Svg.Close onClick={closeModal} />
      </ModalHeader>
      <Center>
        <ChartContainer>
          <StockChart detailStock={detailStock} currentDate={currentDate} />
        </ChartContainer>
        <CheckCondition falseCondition={!detailStock}>
          <BeforeFetch
            content="주식 및 배당 정보입니다."
            svg={<Svg.StockList />}
          />
          <BaseInfoLayout>
            <BaseInfo detailStock={detailStock} />
          </BaseInfoLayout>
        </CheckCondition>
      </Center>
      {/* <Center> */}
      {/* </Center> */}
    </ModalLayout>
  );
};

export default Modal;
