import { useContext, useState } from "react";
import {
  Center,
  ChartContainer,
  HeaderModal,
  LayoutMobileModal,
} from "./MobileModalStyles";
import CheckCondition from "@/lib/util/CheckCondition";
import BeforeFetch from "../beforeFetch/BeforeFetch";
import * as Svg from "@/components/atoms/icon/index";
import StockChart from "@/components/organism/stock/stockChart/StockChart";
import { theme } from "@/styles/theme";
import DetailInfo from "@/components/organism/stock/stockDetail/detailInfo/DetailInfo";
import { StockListContext } from "@/components/organism/stock/stockInfo/StockInfo";

const MobileModal = () => {
  const [showModal, setShowModal] = useState(false);
  const { fetchStockList, detailId } = useContext(StockListContext);

  const detailStock = Array.isArray(fetchStockList)
    ? fetchStockList.find((stock) => stock.srtnCd === detailId)
    : undefined;

  console.log("mobile: ", detailId);

  return (
    <LayoutMobileModal $showModal={showModal}>
      <HeaderModal>
        <Svg.Close onClick={() => setShowModal(false)} />
      </HeaderModal>
      <Center>
        <ChartContainer>
          <StockChart bgColor={theme.palette.black} />
        </ChartContainer>
        <CheckCondition falseCondition={!detailStock}>
          <BeforeFetch
            content="주식 및 배당 정보입니다."
            svg={<Svg.StockList />}
          />
          {detailStock && <DetailInfo detailStock={detailStock} />}
        </CheckCondition>
      </Center>
    </LayoutMobileModal>
  );
};

export default MobileModal;
