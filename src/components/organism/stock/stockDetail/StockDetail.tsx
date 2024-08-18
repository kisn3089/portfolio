import { StockDetailContainer } from "./StockDetailStyle";
import CheckCondition from "@/lib/util/CheckCondition";
import BeforeFetch from "@/components/molecule/beforeFetch/BeforeFetch";
import * as Svg from "@/components/atoms/icon/index";
import DetailInfo from "./detailInfo/DetailInfo";
import { useContext } from "react";
import { StockListContext } from "../stockInfo/StockInfo";

const StockDetail = () => {
  const { fetchStockList, detailId } = useContext(StockListContext);
  const detailStock = Array.isArray(fetchStockList)
    ? fetchStockList.find((stock) => stock.srtnCd === detailId)
    : undefined;

  return (
    <StockDetailContainer>
      <CheckCondition falseCondition={!detailStock}>
        <BeforeFetch
          content="주식 및 배당 정보입니다."
          svg={<Svg.StockList />}
        />
        {detailStock && <DetailInfo detailStock={detailStock} />}
      </CheckCondition>
    </StockDetailContainer>
  );
};

export default StockDetail;
