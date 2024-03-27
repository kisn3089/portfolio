import StockBody from "@/components/organism/stock/stockBody/StockBody";
import StockHeader from "@/components/organism/stock/stockHeader/StockHeader";
import { StockSection } from "@/components/organism/stock/stockHeader/StockHeaderStyles";
import StockList from "@/components/organism/stock/stockList/StockList";
import { getStock } from "@/lib/api/getStock";
import React, { useEffect } from "react";

const StockPage = () => {
  useEffect(() => {
    const qq = async () => {
      const tt = await getStock();
      // console.log(tt);
      console.log(tt.data.response.body.items.item);
    };
    qq();
  }, []);
  return (
    <StockSection>
      <StockHeader />
      <StockBody />
    </StockSection>
  );
};

export default StockPage;
