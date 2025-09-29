import React from "react";
import {
  BaseInfoContainer,
  BaseInfoContent,
  BaseInfoLayout,
  BaseInfoTitle,
  StockName,
} from "./BaseInfoStyles";
import { transUnit } from "@/lib/util/transUnit";
import { formatToLabel } from "@/lib/util/adjustDate";
import { theme } from "@/styles/theme";
import { DetailInfoProps } from "../detailInfo/DetailInfo";

interface BaseInfoProps extends DetailInfoProps {}

const BaseInfo = ({ detailStock }: BaseInfoProps) => {
  if (!detailStock) return;
  const { basDt, clpr, fltRt, hipr, itmsNm, lopr, mkp, mrktCtg, srtnCd, vs } =
    detailStock;

  const baseInfoData = [
    {
      title: "기준 일자: ",
      content: formatToLabel(basDt).convertDot,
      flag: theme.palette.gray100,
    },
    { title: "종가: ", content: transUnit(clpr), flag: theme.palette.gray100 },
    {
      title: "등락률: ",
      content: `${Number(fltRt)}%`,
      flag: Number(fltRt) > 0 ? theme.palette.red : theme.palette.blue,
    },
    {
      title: "대비: ",
      content: transUnit(vs),
      flag: Number(vs) > 0 ? theme.palette.red : theme.palette.blue,
    },
    { title: "고가: ", content: transUnit(hipr), flag: theme.palette.red },
    { title: "저가: ", content: transUnit(lopr), flag: theme.palette.blue },
    { title: "시가: ", content: transUnit(mkp), flag: theme.palette.gray100 },
    { title: "종목 코드: ", content: srtnCd, flag: theme.palette.gray100 },
    { title: "시장 구분: ", content: mrktCtg, flag: theme.palette.gray100 },
  ];

  return (
    <BaseInfoLayout>
      <StockName>{itmsNm}</StockName>
      <BaseInfoContainer>
        {baseInfoData.map((items, i) => (
          <BaseInfoTitle key={i}>
            {items.title}
            <BaseInfoContent $flag={items.flag}>
              {items.content}
            </BaseInfoContent>
          </BaseInfoTitle>
        ))}
      </BaseInfoContainer>
    </BaseInfoLayout>
  );
};

export default BaseInfo;
