import StockHeader from "@/components/organisms/stock/stockHeader/StockHeader";
import { StockSection } from "@/components/organisms/stock/stockHeader/StockHeaderStyles";
import StockInfo from "@/components/organisms/stock/stockInfo/StockInfo";

const StockPage = () => {
  return (
    <StockSection>
      <StockHeader />
      <StockInfo />
    </StockSection>
  );
};

export default StockPage;
