import React from "react";
import { FooterLayout, PagingButton } from "./StockListFooterStyles";

interface StockListFooterProps {
  plusClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const StockListFooter = ({ plusClick }: StockListFooterProps) => {
  return (
    <FooterLayout>
      <PagingButton disabled>PREV</PagingButton>
      <PagingButton disabled onClick={plusClick}>
        NEXT
      </PagingButton>
    </FooterLayout>
  );
};

export default StockListFooter;
