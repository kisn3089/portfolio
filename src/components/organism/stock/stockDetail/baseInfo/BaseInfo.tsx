import React from "react";
import {
  BaseInfoContainer,
  BaseInfoContent,
  BaseInfoLayout,
  BaseInfoTitle,
  StockName,
} from "./BaseInfoStyles";
import { StockDetailProps } from "../StockDetail";
import { transUnit } from "@/lib/util/transUnit";
import { formatToLabel } from "@/lib/util/adjustDate";

interface BaseInfoProps extends StockDetailProps {}

const BaseInfo = ({ detailStock }: BaseInfoProps) => {
  if (!detailStock) return;
  const { basDt, clpr, fltRt, hipr, itmsNm, lopr, mkp, mrktCtg, srtnCd, vs } =
    detailStock;

  const baseInfoData = [
    { title: "기준 일자: ", content: formatToLabel(basDt).convertDot },
    { title: "종가: ", content: transUnit(clpr) },
    { title: "등락률: ", content: `${Number(fltRt)}%` },
    { title: "대비: ", content: transUnit(vs) },
    { title: "고가: ", content: transUnit(hipr) },
    { title: "저가: ", content: transUnit(lopr) },
    { title: "시가: ", content: transUnit(mkp) },
    { title: "종목 코드: ", content: srtnCd },
    { title: "시장 구분: ", content: mrktCtg },
  ];

  return (
    <BaseInfoLayout>
      <StockName>{itmsNm}</StockName>
      <BaseInfoContainer>
        {baseInfoData.map((items, i) => (
          <BaseInfoTitle key={i}>
            {items.title}
            <BaseInfoContent>{items.content}</BaseInfoContent>
          </BaseInfoTitle>
        ))}
      </BaseInfoContainer>
    </BaseInfoLayout>
  );
};

export default BaseInfo;
