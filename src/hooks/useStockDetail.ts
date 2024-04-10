import { useState } from "react";
import { StockDataTypes } from "@/types/stockData.type";

export const useStockDetail = () => {
  const [detailStock, setDetailStock] = useState("");

  const fetchDetail = async (stock: StockDataTypes) => {
    setDetailStock(stock.srtnCd);
  };

  return { detailStock, fetchDetail };
};
