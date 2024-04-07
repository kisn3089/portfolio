import React from "react";
import { SearchContainer, StockHeaderStyle } from "./StockHeaderStyles";
import Input from "@/components/atoms/input/Input";
import * as Svg from "../../../atoms/icon/index";

interface StockHeaderProps {
  searchValue: string;
  changeSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  closeClick: (e: React.MouseEvent) => void;
}

const StockHeader = (props: StockHeaderProps) => {
  const { searchValue, changeSearch, searchEnter, closeClick } = props;

  return (
    <StockHeaderStyle>
      <SearchContainer>
        <Input
          type="text"
          value={searchValue}
          placeholder="주식을 검색해 보세요."
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
