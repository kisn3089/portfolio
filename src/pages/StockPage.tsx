import StockBody from "@/components/organism/stock/stockBody/StockBody";
import StockHeader from "@/components/organism/stock/stockHeader/StockHeader";
import { StockSection } from "@/components/organism/stock/stockHeader/StockHeaderStyles";
import useSearch from "@/hooks/useSearch";

const StockPage = () => {
  const {
    searchValue,
    pagenation,
    changeSearch,
    searchEnter,
    closeClick,
    footerClick,
  } = useSearch();
  return (
    <StockSection>
      <StockHeader
        searchValue={searchValue}
        changeSearch={changeSearch}
        searchEnter={searchEnter}
        closeClick={closeClick}
      />
      <StockBody pagenation={pagenation} footerClick={footerClick} />
    </StockSection>
  );
};

export default StockPage;
