import React from "react";
import { FooterLayout, PagingButton } from "./StockListFooterStyles";

interface StockListFooterProps {
  dataLength?: number;
  pagenation: number;
  footerClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const StockListFooter = ({
  dataLength,
  pagenation,
  footerClick,
}: StockListFooterProps) => {
  return (
    <FooterLayout>
      <PagingButton id="-" onClick={footerClick} disabled={pagenation <= 1}>
        PREV
      </PagingButton>
      <PagingButton
        id="+"
        onClick={footerClick}
        disabled={(dataLength || 0) < 10}
      >
        NEXT
      </PagingButton>
    </FooterLayout>
  );
};

export default StockListFooter;
