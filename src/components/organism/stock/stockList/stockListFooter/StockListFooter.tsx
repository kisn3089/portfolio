import React from "react";
import { FooterLayout, PagingButton } from "./StockListFooterStyles";

interface StockListFooterProps {
  plusClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const StockListFooter = ({ plusClick }: StockListFooterProps) => {
  return (
    <FooterLayout>
      <PagingButton>PREV</PagingButton>
      <PagingButton onClick={plusClick}>NEXT</PagingButton>
    </FooterLayout>
  );
};

export default StockListFooter;
