import React, { useState } from "react";
import { useGetStock } from "./useGetStock";

const useSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const [pagenation, setPagenation] = useState(1);
  const { refetch } = useGetStock(searchValue, pagenation);

  const changeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  const footerClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const { id } = e.currentTarget;
    if (id === "-") setPagenation((prev) => prev - 1);
    else setPagenation((prev) => prev + 1);
  };

  const searchEnter = async (e: React.KeyboardEvent) => {
    if (!searchValue || e.nativeEvent.isComposing) return;
    if (e.key === "Enter") {
      if (pagenation === 1) await refetch();
    }
  };

  const closeClick = () => {
    setSearchValue("");
  };

  return {
    searchValue,
    pagenation,
    changeSearch,
    searchEnter,
    closeClick,
    footerClick: footerClick,
  };
};

export default useSearch;
