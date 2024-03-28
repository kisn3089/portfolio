import React from "react";
import { PriceInfo, StockItem, StockListContainer } from "./StockListStyle";

const data = [
  {
    name: "삼성전자",
    closePrice: 76900,
    daysRange: "5.63",
  },
  {
    name: "SK하이닉스",
    closePrice: 181200,
    daysRange: "2.6",
  },
  {
    name: "포스코홀딩스",
    closePrice: 428000,
    daysRange: "-.28",
  },
];
const StockList = () => {
  return (
    <StockListContainer>
      <StockItem>
        삼성전자
        <PriceInfo $flag="up">
          <span>5.63</span>
          <span>76900</span>
        </PriceInfo>
      </StockItem>
      <StockItem>
        SK하이닉스
        <PriceInfo $flag="down">
          <span>2.6</span>
          <span>181200</span>
        </PriceInfo>
      </StockItem>
      <StockItem>
        포스코홀딩스
        <PriceInfo $flag="">
          <span>-.28</span>
          <span>428000</span>
        </PriceInfo>
      </StockItem>
    </StockListContainer>
  );
};

export default StockList;
