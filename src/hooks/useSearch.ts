import React, { useState } from "react";
import { useGetStock } from "./useGetStock";

const useSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const [pagenation, setPagenation] = useState(1);

  const changeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  const plusClick = async () => {
    setPagenation((prev) => prev++);
    await refetch();
  };

  const { refetch } = useGetStock(searchValue, pagenation);

  const searchEnter = async (e: React.KeyboardEvent) => {
    if (!searchValue || e.nativeEvent.isComposing) return;
    if (e.key === "Enter") {
      await refetch();
      // setSearchValue("");
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
    plusClick,
  };
};

export default useSearch;
