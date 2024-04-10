import React from "react";
import { SearchContainer, StockHeaderStyle } from "./StockHeaderStyles";
import Input from "@/components/atoms/input/Input";
import * as Svg from "../../../atoms/icon/index";

interface StockHeaderProps {
  searchValue: string;
  changeSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchEnter: (
    e: React.KeyboardEvent,
    callback: (searchValue: string) => void
  ) => void;
  callback: (searchValue: string) => void;
  closeClick: (e: React.MouseEvent) => void;
}

const StockHeader = (props: StockHeaderProps) => {
  const { searchValue, changeSearch, searchEnter, closeClick, callback } =
    props;

  return (
    <StockHeaderStyle>
      <SearchContainer>
        <Input
          type="text"
          value={searchValue}
          placeholder="주식을 검색해 보세요."
          onChange={changeSearch}
          onKeyDown={(e: React.KeyboardEvent) =>
            searchEnter(e, () => callback(searchValue))
          }
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
