import { SearchContainer, StockHeaderStyle } from "./StockHeaderStyles";
import Input from "@/components/atoms/input/Input";
import * as Svg from "../../../atoms/icon/index";
import useSearch from "@/hooks/useSearch";
import CheckCondition from "@/lib/util/CheckCondition";

const StockHeader = () => {
  const { searchValue, changeSearch, closeClick, searchEnter } = useSearch();

  return (
    <StockHeaderStyle>
      <SearchContainer>
        <Input
          type="text"
          value={searchValue}
          placeholder="주식을 검색해 보세요."
          onChange={changeSearch}
          onKeyDown={searchEnter}
        />
        <CheckCondition falseCondition={!!searchValue}>
          <Svg.Close className="close" onClick={closeClick} />
          <Svg.Search className="search" />
        </CheckCondition>
      </SearchContainer>
    </StockHeaderStyle>
  );
};

export default StockHeader;
