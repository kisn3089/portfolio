import { useState } from "react";
import { StockDataTypes } from "@/types/stockData.type";

export const useStockDetail = () => {
  const [detailStock, setDetailStock] = useState<StockDataTypes>();

  const fetchDetail = async (stock: StockDataTypes) => {
    setDetailStock(stock);
  };

  return { detailStock, fetchDetail };
};
