import { AllocationTypes, StockDataTypes } from "@/types/stockData.type";
import { StockDetailContainer } from "./StockDetailStyle";
import CheckCondition from "@/lib/util/CheckCondition";
import BeforeFetch from "@/components/molecule/beforeFetch/BeforeFetch";
import * as Svg from "@/components/atoms/icon/index";
import DetailInfo from "./detailInfo/DetailInfo";

export interface StockDetailProps {
  detailStock?: StockDataTypes;
  // allocationData?: AllocationTypes;
  // allocationFetching: boolean;
}

const StockDetail = ({
  detailStock,
}: // allocationData,
// allocationFetching,
StockDetailProps) => {
  return (
    <StockDetailContainer>
      <CheckCondition falseCondition={!detailStock}>
        <BeforeFetch
          content="주식 및 배당 정보입니다."
          svg={<Svg.StockList />}
        />
        <DetailInfo
          detailStock={detailStock}
          // allocationData={allocationData}
          // allocationFetching={allocationFetching}
        />
      </CheckCondition>
    </StockDetailContainer>
  );
};

export default StockDetail;
