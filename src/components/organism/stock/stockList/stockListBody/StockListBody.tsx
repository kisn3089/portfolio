import { adjustDate } from "@/lib/util/adjustDate";
import { StandardDate, StandardDateContainer } from "../StockListStyle";
import {
  PriceInfo,
  SlideRight,
  StockCode,
  StockItem,
  StockItemInfo,
} from "./StockListBodyStyles";
import * as Svg from "@/components/atoms/icon/index";
import { StockDataTypes } from "@/types/stockData.type";

export interface StockBodyProps {
  currentDate: Date;
  isLoading: boolean;
  getStockList?: StockDataTypes[];
  fetchDetail: (stock: StockDataTypes) => void;
  clickChangeDate: (e: React.MouseEvent) => void;
}

const StockBody = ({
  currentDate,
  isLoading,
  getStockList,
  fetchDetail,
  clickChangeDate,
}: StockBodyProps) => {
  return (
    <>
      <StandardDateContainer $hasValue={!getStockList}>
        <Svg.ArrowLeft id="-" onClick={clickChangeDate} />
        <StandardDate>
          {adjustDate({ standardDate: currentDate }).originDot}
          {/* {adjustDate({ standardDate: currentDate }).betweenDot} */}
        </StandardDate>
        <Svg.ArrowRight id="+" onClick={clickChangeDate} />
      </StandardDateContainer>
      <SlideRight $isLoading={isLoading}>
        {getStockList?.map((stock, i) => (
          <StockItem key={i} onClick={() => fetchDetail(stock)}>
            <StockItemInfo>
              <span>{stock.itmsNm}</span>
              <StockCode>{stock.srtnCd}</StockCode>
            </StockItemInfo>

            <PriceInfo $flag={Number(stock.fltRt) > 0 ? "up" : "down"}>
              <span>{Number(stock.fltRt)}%</span>
              <span>{Number(stock.clpr).toLocaleString("ko-KR")}</span>
            </PriceInfo>
          </StockItem>
        ))}
      </SlideRight>
    </>
  );
};

export default StockBody;
