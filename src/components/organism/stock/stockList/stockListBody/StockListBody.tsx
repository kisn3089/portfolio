import { PriceInfo, SlideRight, StockItem } from "./StockListBodyStyles";

interface StockBodyProps {
  isLoading: boolean;
  getStockList?: any[];
}

const StockBody = ({ isLoading, getStockList }: StockBodyProps) => {
  return (
    <SlideRight $isLoading={isLoading}>
      {getStockList?.map((stock, i) => (
        <StockItem key={i} onClick={() => console.log(stock)}>
          {stock.itmsNm}
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
