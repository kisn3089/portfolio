import StockBody from "@/components/organism/stock/stockBody/StockBody";
import StockHeader from "@/components/organism/stock/stockHeader/StockHeader";
import { StockSection } from "@/components/organism/stock/stockHeader/StockHeaderStyles";
import useSearch from "@/hooks/useSearch";

const StockPage = () => {
  const {
    currentDate,
    fetchSearchValue,
    searchValue,
    pagenation,
    changeSearch,
    searchEnter,
    closeClick,
    footerClick,
    clickChangeDate,
  } = useSearch();
  return (
    <StockSection>
      <StockHeader
        searchValue={searchValue}
        changeSearch={changeSearch}
        searchEnter={searchEnter}
        closeClick={closeClick}
      />
      <StockBody
        currentDate={currentDate}
        searchValue={searchValue}
        pagenation={pagenation}
        fetchSearchValue={fetchSearchValue}
        footerClick={footerClick}
        clickChangeDate={clickChangeDate}
      />
    </StockSection>
  );
};

export default StockPage;
