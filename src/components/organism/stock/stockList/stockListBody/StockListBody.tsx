import { transUnit } from "@/lib/util/transUnit";
import {
  PriceInfo,
  SlideRight,
  StockCode,
  StockItem,
  StockItemInfo,
} from "./StockListBodyStyles";
import { StockDataTypes } from "@/types/stockData.type";

export interface StockBodyProps {
  isLoading: boolean;
  getStockList?: StockDataTypes[];
  fetchDetail: (stock: StockDataTypes) => void;
}

const StockBody = ({
  isLoading,
  getStockList,
  fetchDetail,
}: StockBodyProps) => {
  return (
    <>
      <SlideRight $isLoading={isLoading}>
        {getStockList?.map((stock, i) => (
          <StockItem key={i} onClick={() => fetchDetail(stock)}>
            <StockItemInfo>
              <span>{stock.itmsNm}</span>
              <StockCode>{stock.srtnCd}</StockCode>
            </StockItemInfo>

            <PriceInfo $flag={Number(stock.fltRt) > 0 ? "up" : "down"}>
              <span>{Number(stock.fltRt)}%</span>
              <span>{transUnit(stock.clpr)}</span>
            </PriceInfo>
          </StockItem>
        ))}
      </SlideRight>
    </>
  );
};

export default StockBody;
