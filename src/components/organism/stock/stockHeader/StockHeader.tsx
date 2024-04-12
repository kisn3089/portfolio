import React from "react";
import { SearchContainer, StockHeaderStyle } from "./StockHeaderStyles";
import Input from "@/components/atoms/input/Input";
import * as Svg from "../../../atoms/icon/index";
import useSearch from "@/hooks/useSearch";
import CheckCondition from "@/lib/util/CheckCondition";

interface StockHeaderProps {
  callback: (searchValue: string) => void;
}

const StockHeader = ({ callback }: StockHeaderProps) => {
  const { searchValue, changeSearch, closeClick, searchEnter } = useSearch();

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
        <CheckCondition falseCondition={!!searchValue}>
          <Svg.Close
            width={32}
            height={32}
            className="close"
            onClick={closeClick}
          />
          <Svg.Search width={26} height={26} className="search" />
        </CheckCondition>
      </SearchContainer>
    </StockHeaderStyle>
  );
};

export default StockHeader;
