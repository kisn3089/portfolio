import StockBody from "@/components/organism/stock/stockBody/StockBody";
import StockHeader from "@/components/organism/stock/stockHeader/StockHeader";
import { StockSection } from "@/components/organism/stock/stockHeader/StockHeaderStyles";
import useStockList from "@/hooks/useStockList";

const StockPage = () => {
  const {
    currentDate,
    fetchSearchValue,
    pagenation,
    isInit,
    footerClick,
    clickChangeDate,
    enterCallback,
  } = useStockList();
  return (
    <StockSection>
      <StockHeader callback={enterCallback} />
      <StockBody
        currentDate={currentDate}
        pagenation={pagenation}
        fetchSearchValue={fetchSearchValue}
        isInit={isInit}
        footerClick={footerClick}
        clickChangeDate={clickChangeDate}
      />
    </StockSection>
  );
};

export default StockPage;
