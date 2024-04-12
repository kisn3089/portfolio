import React from "react";
import { StandardDate, StandardDateContainer } from "./DateHeaderStyles";
import * as Svg from "@/components/atoms/icon/index";
import { adjustDate, convertDay } from "@/lib/util/adjustDate";
import { StockDataTypes } from "@/types/stockData.type";

interface DateHeaderProps {
  currentDate: Date;
  getStockList?: StockDataTypes[];
  clickChangeDate: (e: React.MouseEvent) => void;
}

const DateHeader = ({
  currentDate,
  getStockList,
  clickChangeDate,
}: DateHeaderProps) => {
  return (
    <StandardDateContainer $hasValue={!getStockList}>
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
