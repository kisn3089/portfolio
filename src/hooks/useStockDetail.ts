import { useState } from "react";
import { StockDataTypes } from "@/types/stockData.type";

export const useStockDetail = () => {
  const [detailStock, setDetailStock] = useState<StockDataTypes>();
  const [showModal, setShowModal] = useState(false);

  const fetchDetail = async (stock: StockDataTypes) => {
    setDetailStock(stock);
    if (!showModal) setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  return { detailStock, showModal, fetchDetail, closeModal };
};
