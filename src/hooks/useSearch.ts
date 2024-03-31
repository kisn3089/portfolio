import React, { useState } from "react";
import { useGetStock } from "./useGetStock";

const useSearch = () => {
  const [searchValue, setSearchValue] = useState("");

  const changeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  const { refetch } = useGetStock(searchValue);

  const searchEnter = async (e: React.KeyboardEvent) => {
    if (!searchValue || e.nativeEvent.isComposing) return;
    if (e.key === "Enter") {
      await refetch();
      setSearchValue("");
    }
  };

  const closeClick = () => {
    setSearchValue("");
  };
  return { searchValue, changeSearch, searchEnter, closeClick };
};

export default useSearch;
