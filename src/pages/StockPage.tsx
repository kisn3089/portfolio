import StockBody from "@/components/organism/stock/stockBody/StockBody";
import StockHeader from "@/components/organism/stock/stockHeader/StockHeader";
import { StockSection } from "@/components/organism/stock/stockHeader/StockHeaderStyles";
import StockList from "@/components/organism/stock/stockList/StockList";
import { getStock } from "@/lib/api/getStock";
import { useQueries, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import React, { useEffect } from "react";

interface IStock {
  response: any;
}

const StockPage = () => {
  // useEffect(() => {
  //   const qq = async () => {
  //     const tt = await getStock("삼성전자");
  //     console.log(tt);
  //     console.log(tt.data.response.body.items.item);
  //   };
  //   qq();
  // }, []);
  // const { data: getStockList } = useQuery<any[], AxiosError>(["stockList"], getStock("삼성전자")
  // );
  // const { data: getStockList } = useQuery<any[], AxiosError>({
  //   queryKey: ["stockList"],
  //   queryFn: async () => await getStock("삼성전자"),
  // });

  // console.log("getStockList: ", getStockList);

  return (
    <StockSection>
      <StockHeader />
      <StockBody />
    </StockSection>
  );
};

export default StockPage;
