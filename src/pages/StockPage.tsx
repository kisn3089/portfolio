import StockBody from "@/components/organism/stock/stockBody/StockBody";
import StockHeader from "@/components/organism/stock/stockHeader/StockHeader";
import { StockSection } from "@/components/organism/stock/stockHeader/StockHeaderStyles";
import useSearch from "@/hooks/useSearch";

const StockPage = () => {
  const { searchValue, changeSearch, searchEnter, closeClick, plusClick } =
    useSearch();
  return (
    <StockSection>
      <StockHeader
        searchValue={searchValue}
        changeSearch={changeSearch}
        searchEnter={searchEnter}
        closeClick={closeClick}
      />
      <StockBody plusClick={plusClick} />
    </StockSection>
  );
};

export default StockPage;
