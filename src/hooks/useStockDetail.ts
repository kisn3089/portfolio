import React, { useState } from "react";
import { useGetStock } from "./useGetStock";

export const useStockDetail = () => {
  const [detailCode, setDetailCode] = useState("");
  // const { refetch } = useGetStock({
  //   code: detailCode,
  //   standardData: new Date(),
  // }).getDetail;

  const fetchDetail = async (stock: any) => {
    const code = stock.srtnCd;
    setDetailCode(code);
    // await fetchDetails();
  };
  return { detailCode, fetchDetail };
};
