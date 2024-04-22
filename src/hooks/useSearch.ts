import { theme } from "@/styles/theme";
import React, { useState } from "react";

const useSearch = () => {
  const [searchValue, setSearchValue] = useState("");

  const changeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  const searchEnter = (
    e: React.KeyboardEvent,
    callback: (searchValue: string) => void
  ) => {
    if (!searchValue || e.nativeEvent.isComposing) return;
    if (e.key === "Enter") {
      callback(searchValue);

      if (window.innerWidth <= parseInt(theme.deviceSize.mobile)) {
        (document.activeElement as HTMLElement).blur();
      }
    }
  };

  const closeClick = () => {
    setSearchValue("");
  };
<<<<<<< HEAD

=======
>>>>>>> 171c23ae18db803980609b6f682f26486e09bf29
  return { searchValue, changeSearch, searchEnter, closeClick };
};

export default useSearch;
