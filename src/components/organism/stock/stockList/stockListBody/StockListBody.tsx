import { StandardDate, StandardDateContainer } from "../StockListStyle";
import {
  PriceInfo,
  SlideRight,
  StockCode,
  StockItem,
  StockItemInfo,
} from "./StockListBodyStyles";
import * as Svg from "@/components/atoms/icon/index";

interface StockBodyProps {
  searchValue: string;
  isLoading: boolean;
  getStockList?: any[];
  fetchDetail: (stock: any) => void;
}

const StockBody = ({
  searchValue,
  isLoading,
  getStockList,
  fetchDetail,
}: StockBodyProps) => {
  return (
    <SlideRight $isLoading={isLoading}>
      <StandardDateContainer $hasValue={searchValue === ""}>
        <Svg.ArrowLeft onClick={() => console.log("123")} />
        <StandardDate>24.04.10</StandardDate>
        <Svg.ArrowRight />
      </StandardDateContainer>
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
  );
};

export default StockBody;
