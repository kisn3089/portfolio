import React, { useState } from "react";
import { SearchContainer, StockHeaderStyle } from "./StockHeaderStyles";
import Input from "@/components/atoms/input/Input";
import * as Svg from "../../../atoms/icon/index";
import useSearch from "@/hooks/useSearch";

const StockHeader = () => {
  const { searchValue, changeSearch, searchEnter, closeClick } = useSearch();

  return (
    <StockHeaderStyle>
      <SearchContainer>
        <Input
          type="text"
          value={searchValue}
          onChange={changeSearch}
          onKeyDown={searchEnter}
          autoFocus
        />
        {searchValue ? (
          <Svg.Close
            width={32}
            height={32}
            className="close"
            onClick={closeClick}
          />
        ) : (
          <Svg.Search width={26} height={26} className="search" />
        )}
      </SearchContainer>
    </StockHeaderStyle>
  );
};

export default StockHeader;
