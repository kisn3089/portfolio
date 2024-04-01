import React, { useState } from "react";
import { useGetStock } from "./useGetStock";

const useSearch = () => {
  const [searchValue, setSearchValue] = useState("");

  const changeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  const page = { no: 1 };
  const plusClick = () => {
    // page.no + 1;
    // console.log("page.no: ", page.no);
  };

  const { refetch } = useGetStock(searchValue, page.no);

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
  return { searchValue, changeSearch, searchEnter, closeClick, plusClick };
};

export default useSearch;
