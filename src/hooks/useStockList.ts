import React, { useState } from "react";
import { calcById } from "@/lib/util/calcById";
import useDate from "./useDate";

const useStockList = () => {
  const { currentDate, clickChangeDate } = useDate();
  const [fetchSearchValue, setFetchSearchValue] = useState("");
  const [pagenation, setPagenation] = useState(1);
  const [isInit, setIsInit] = useState(true);

  const footerClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { id } = e.currentTarget;
    setPagenation((prev) => prev + calcById(id));
  };

  const enterCallback = (searchValue: string) => {
    setPagenation(1);
    setFetchSearchValue(searchValue);
    if (isInit) setIsInit(false);
  };

  return {
    currentDate,
    fetchSearchValue,
    pagenation,
    isInit,
    enterCallback,
    footerClick,
    clickChangeDate,
  };
};

export default useStockList;
