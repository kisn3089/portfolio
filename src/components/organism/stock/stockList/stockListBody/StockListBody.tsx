import { transUnit } from "@/lib/util/transUnit";
import {
  PriceInfo,
  SlideRight,
  StockCode,
  StockItem,
  StockItemInfo,
} from "./StockListBodyStyles";
import { useContext } from "react";
import { StockListContext } from "../../stockInfo/StockInfo";

const StockBody = () => {
  const { isLoading, listStockList, setDetailId } =
    useContext(StockListContext);

  return (
    <>
      <SlideRight $isLoading={isLoading}>
        {listStockList?.map((stock, i) => (
          <StockItem key={i} onClick={() => setDetailId(stock.srtnCd)}>
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
