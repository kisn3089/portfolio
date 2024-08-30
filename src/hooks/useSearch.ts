import { theme } from "@/styles/theme";
import React, { useState } from "react";
import useSetParams from "./useSetParams";

const useSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const { update, reset } = useSetParams();

  const changeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value.trim().toLocaleUpperCase());
  };

  const searchEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.nativeEvent.isComposing) {
      // mobile enter시 키보드 내려가는 기능
      if (window.innerWidth <= parseInt(theme.deviceSize.mobile)) {
        (document.activeElement as HTMLElement).blur();
      }

      if (!searchValue) return reset();
      update("search", searchValue);
    }
  };

  const closeClick = () => {
    setSearchValue("");
  };

  return { searchValue, changeSearch, searchEnter, closeClick };
};

export default useSearch;
