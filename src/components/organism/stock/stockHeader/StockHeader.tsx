import React, { useState } from "react";
import { SearchContainer, StockHeaderStyle } from "./StockHeaderStyles";
import Input from "@/components/atoms/input/Input";
import * as Svg from "../../../atoms/icon/index";

const StockHeader = () => {
  const [searchValue, setSearchValue] = useState("");
  const changeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  return (
    <StockHeaderStyle>
      <SearchContainer>
        <Input type="text" value={searchValue} onChange={changeSearch} />
        {searchValue ? (
          <Svg.Close width={32} height={32} className="close" />
        ) : (
          <Svg.Search width={26} height={26} className="search" />
        )}
      </SearchContainer>
    </StockHeaderStyle>
  );
};

export default StockHeader;
