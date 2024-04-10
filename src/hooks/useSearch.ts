import React, { useState } from "react";
import { useGetStock } from "./useGetStock";
import { calcById } from "@/lib/util/calcById";

const useSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const [pagenation, setPagenation] = useState(1);
  const [currentDate, setCurrentDate] = useState(new Date());
  const { refetch: fetchList } = useGetStock({
    search: searchValue,
    pageNo: pagenation,
    standardData: currentDate,
  }).getList;

  const changeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  const footerClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const { id } = e.currentTarget;
    setPagenation((prev) => prev + calcById(id));
  };

  const searchEnter = async (e: React.KeyboardEvent) => {
    if (!searchValue || e.nativeEvent.isComposing) return;
    if (e.key === "Enter") {
      if (pagenation === 1) await fetchList();
    }
  };

  const closeClick = () => {
    setSearchValue("");
  };

  const clickChangeDate = (e: React.MouseEvent) => {
    const { id } = e.currentTarget;
    const newDate = currentDate.setDate(currentDate.getDate() + calcById(id));

    setCurrentDate(new Date(newDate));
  };

  return {
    currentDate,
    searchValue,
    pagenation,
    changeSearch,
    searchEnter,
    closeClick,
    footerClick,
    clickChangeDate,
  };
};

export default useSearch;
