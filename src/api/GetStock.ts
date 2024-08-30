import { adjustDate } from "@/lib/util/adjustDate";
import {
  FETCHSTOCKDETAIL,
  FETCHSTOCKLIST,
  STOCKLIST_BASE_URL,
} from "@/lib/util/constanse";
import { axiosRequest } from "@/lib/util/coreAxios";
import { StockDataTypes } from "@/types/stockData.type";
import { useQuery } from "@tanstack/react-query";

type GetStockListProps = {
  currentDate: Date;
  search: string;
  page: number;
};

type GetStockDetailProps = {
  stockCode: string;
  currentDate: Date;
};

export const GetStockList = ({
  currentDate,
  search,
  page,
}: GetStockListProps) =>
  useQuery({
    queryKey: [FETCHSTOCKLIST, search, currentDate, page],
    queryFn: () =>
      axiosRequest.get(STOCKLIST_BASE_URL, {
        params: {
          serviceKey: import.meta.env.VITE_SERVICE_KEY,
          numOfRows: 10,
          pageNo: page,
          resultType: "json",
          likeItmsNm: search,
          basDt: adjustDate({ standardDate: currentDate }).originOnlyNumber,
        },
      }),
    enabled: !!search,
    select: (data) => data.data.response.body,
  });

export const GetStockChart = ({
  stockCode,
  currentDate,
}: GetStockDetailProps) =>
  useQuery({
    queryKey: [FETCHSTOCKDETAIL, stockCode, currentDate],
    queryFn: () =>
      axiosRequest.get(STOCKLIST_BASE_URL, {
        params: {
          serviceKey: import.meta.env.VITE_SERVICE_KEY,
          numOfRows: 7,
          pageNo: 1,
          resultType: "json",
          likeIsinCd: stockCode,
          endBasDt: adjustDate({ isDetail: true, standardDate: currentDate })
            .originOnlyNumber,
        },
      }),
    enabled: !!stockCode,
    select: (data): StockDataTypes[] => data.data.response.body.items.item,
  });
