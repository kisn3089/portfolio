import { StockDataTypes } from "@/types/stockData.type";
import { BaseInfoLayout, StockDetailContainer } from "./StockDetailStyle";
import CheckCondition from "@/lib/util/CheckCondition";
import BeforeFetch from "@/components/molecule/beforeFetch/BeforeFetch";
import * as Svg from "@/components/atoms/icon/index";
import BaseInfo from "./baseInfo/BaseInfo";

export interface StockDetailProps {
  detailStock?: StockDataTypes;
}

const StockDetail = ({ detailStock }: StockDetailProps) => {
  // console.log("detailStock: ", detailStock);

  return (
    <StockDetailContainer>
      {/* <CheckCondition falseCondition={!detailStock}>
        <BeforeFetch
          content="주식 및 배당 정보입니다."
          svg={<Svg.StockList />}
        /> */}
      <BaseInfoLayout>
        <BaseInfo detailStock={detailStock} />
      </BaseInfoLayout>
      {/* </CheckCondition> */}
    </StockDetailContainer>
  );
};

export default StockDetail;
