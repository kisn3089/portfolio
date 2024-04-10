import React, { useState } from "react";
import { useGetStock } from "./useGetStock";
import { calcById } from "@/lib/util/calcById";

const useStockList = () => {
  const [fetchSearchValue, setFetchSearchValue] = useState("");
  const [pagenation, setPagenation] = useState(1);
  const [currentDate, setCurrentDate] = useState(new Date());
  useGetStock({
    search: fetchSearchValue,
    pageNo: pagenation,
    standardData: currentDate,
    enabled: !!fetchSearchValue,
  }).getList;

  const footerClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const { id } = e.currentTarget;
    setPagenation((prev) => prev + calcById(id));
  };

  const enterCallback = (searchValue: string) => {
    setPagenation(1);
    setFetchSearchValue(searchValue);
  };

  const clickChangeDate = (e: React.MouseEvent) => {
    const { id } = e.currentTarget;
    const newDate = currentDate.setDate(currentDate.getDate() + calcById(id));

    setCurrentDate(new Date(newDate));
  };

  return {
    currentDate,
    fetchSearchValue,
    pagenation,
    enterCallback,
    footerClick,
    clickChangeDate,
  };
};

export default useStockList;
