export interface StockDataTypes {
  // 기준일자
  basDt: string;
  // 종가
  clpr: string;
  // 등락률
  fltRt: string;
  // 고가
  hipr: string;
  // ISIN 코드
  isinCd: string;
  // 종목명
  itmsNm: string;
  // 저가
  lopr: string;
  // 상장주식수
  lstgStCnt: string;
  // 시가
  mkp: string;
  // 시장구분 -> KOSPI
  mrktCtg: string;
  // 시가총액
  mrktTotAmt: string;
  // 종목코드
  srtnCd: string;
  // 거래금액
  trPrc: string;
  // 거래량
  trqu: string;
  // 대비
  vs: string;
}

export interface AllocationTypes {
  // 기준 일자
  basDt: string;
  // 법인 등록 번호
  crno: string;
  // 주식 발행 회사 이름
  stckIssuCmpyNm: string;
  // 유가 증권 종목 종류
  scrsItmsKcdNm: string;
  // 액면가
  stckParPrc: string;
  //
}

export const mockChartData = [
  {
    id: "stock",
    data: [
      {
        x: "20240403",
        y: "88301",
      },
      {
        x: "20240404",
        y: "87231",
      },
      {
        x: "20240405",
        y: "81231",
      },
      {
        x: "20240406",
        y: "82231",
      },
      {
        x: "20240407",
        y: "79231",
      },
      {
        x: "20240408",
        y: "85231",
      },
      {
        x: "20240409",
        y: "86231",
      },
    ],
  },
];
