import React from "react";
import { FooterLayout, PagingButton } from "./StockListFooterStyles";
import { calcById } from "@/lib/util/calcById";
import { useSearchParams } from "react-router-dom";
import useSetParams from "@/hooks/useSetParams";

interface StockListFooterProps {
  dataLength?: number;
}

const StockListFooter = ({ dataLength }: StockListFooterProps) => {
  const { update } = useSetParams();
  const [query] = useSearchParams();
  const pagenation = +(query.get("page") || 1);

  const footerClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { id } = e.currentTarget;
    const prev = pagenation;
    const next = +prev + calcById(id);
    update("page", next);
  };

  return (
    <FooterLayout>
      <PagingButton id="-" onClick={footerClick} disabled={pagenation <= 1}>
        PREV
      </PagingButton>
      <PagingButton
        id="+"
        onClick={footerClick}
        disabled={(dataLength || 0) < 10}>
        NEXT
      </PagingButton>
    </FooterLayout>
  );
};

export default StockListFooter;
