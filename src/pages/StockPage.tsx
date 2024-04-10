import StockBody from "@/components/organism/stock/stockBody/StockBody";
import StockHeader from "@/components/organism/stock/stockHeader/StockHeader";
import { StockSection } from "@/components/organism/stock/stockHeader/StockHeaderStyles";
import useSearch from "@/hooks/useSearch";
import useStockList from "@/hooks/useStockList";

const StockPage = () => {
  const { searchValue, changeSearch, closeClick, searchEnter } = useSearch();
  const {
    currentDate,
    fetchSearchValue,
    pagenation,
    footerClick,
    clickChangeDate,
    enterCallback,
  } = useStockList();
  return (
    <StockSection>
      <StockHeader
        searchValue={searchValue}
        changeSearch={changeSearch}
        searchEnter={searchEnter}
        callback={enterCallback}
        closeClick={closeClick}
      />
      <StockBody
        currentDate={currentDate}
        pagenation={pagenation}
        fetchSearchValue={fetchSearchValue}
        footerClick={footerClick}
        clickChangeDate={clickChangeDate}
      />
    </StockSection>
  );
};

export default StockPage;
