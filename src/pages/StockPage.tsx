import StockHeader from "@/components/organism/stock/stockHeader/StockHeader";
import { StockSection } from "@/components/organism/stock/stockHeader/StockHeaderStyles";
import StockInfo from "@/components/organism/stock/stockInfo/StockInfo";

const StockPage = () => {
  return (
    <StockSection>
      <StockHeader />
      <StockInfo />
    </StockSection>
  );
};

export default StockPage;
