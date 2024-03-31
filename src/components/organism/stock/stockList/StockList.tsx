import React from "react";
import { PriceInfo, StockItem, StockListContainer } from "./StockListStyle";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getStock } from "@/lib/api/getStock";

const data = [
  {
    name: "삼성전자",
    closePrice: 76900,
    daysRange: "5.63",
  },
  {
    name: "SK하이닉스",
    closePrice: 181200,
    daysRange: "2.6",
  },
  {
    name: "포스코홀딩스",
    closePrice: 428000,
    daysRange: "-.28",
  },
];
const StockList = () => {
  const { data: getStockList, isLoading } = useQuery<any[], AxiosError>({
    queryKey: ["stockList"],
  });
  console.log("getStockList: ", getStockList);

  return (
    <StockListContainer>
      {isLoading && <div>Loading...</div>}
      {/* {getStockList?.map((stock, i) => (
        <StockItem key={i} onClick={() => console.log(stock)}>
          {stock.name}
          <PriceInfo $flag={Number(stock.daysRange) > 0 ? "up" : "down"}>
            <span>{Number(stock.fltRt)}%</span>
            <span>{stock.closePrice.toLocaleString("ko-KR")}</span>
          </PriceInfo>
        </StockItem>
      ))} */}
    </StockListContainer>
  );
};

export default StockList;
