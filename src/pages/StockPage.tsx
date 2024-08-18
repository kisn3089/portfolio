import StockHeader from "@/components/organism/stock/stockHeader/StockHeader";
import { StockSection } from "@/components/organism/stock/stockHeader/StockHeaderStyles";
import { Outlet } from "react-router-dom";

const StockPage = () => {
  return (
    <StockSection>
      <StockHeader />
      <Outlet />
    </StockSection>
  );
};

export default StockPage;
