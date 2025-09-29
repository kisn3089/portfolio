import { useContext } from "react";
import { StandardDate, StandardDateContainer } from "./DateHeaderStyles";
import * as Svg from "@/components/atoms/icon/index";
import { adjustDate, convertDay } from "@/lib/util/adjustDate";
import { StockListContext } from "../../../stockInfo/StockInfo";

const DateHeader = () => {
  const {
    fetchStockList: listStockList,
    currentDate,
    clickChangeDate,
  } = useContext(StockListContext);

  return (
    <StandardDateContainer $hasValue={!listStockList}>
      <Svg.ArrowLeft id="-" onClick={clickChangeDate} />
      <StandardDate>
        {`${adjustDate({ standardDate: currentDate }).originDot} ${
          convertDay[currentDate.getDay()]
        }`}
      </StandardDate>
      <Svg.ArrowRight id="+" onClick={clickChangeDate} />
    </StandardDateContainer>
  );
};

export default DateHeader;
