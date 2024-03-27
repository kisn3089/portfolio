import StockHeader from "@/components/organism/stock/stockHeader/StockHeader";
import { StockSection } from "@/components/organism/stock/stockHeader/StockHeaderStyles";
import { getStock } from "@/lib/api/getStock";
import React, { useEffect } from "react";

const StockPage = () => {
  // useEffect(() => {
  //   const qq = async () => {
  //     console.log("start");
  //     const tt = await getStock();
  //     // console.log(tt);
  //     console.log(tt.data.response.body.items.item);
  //   };
  //   qq();
  // }, []);
  return (
    <StockSection>
      <StockHeader />
    </StockSection>
  );
};

export default StockPage;
