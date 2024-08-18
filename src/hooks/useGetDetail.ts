import { getStockDetail } from "@/lib/api/getStockDetail";
import { FETCHSTOCKDETAIL } from "@/lib/util/constanse";
import { StockDataTypes } from "@/types/stockData.type";
import { useQueries } from "@tanstack/react-query";

interface useGetDetailProps {
  detailStock?: StockDataTypes;
  currentDate: Date;
}

/* Remove */
export const useGetDetail = ({
  detailStock,
  currentDate,
}: useGetDetailProps) => {
  const fetchsDetail = useQueries({
    queries: [
      // 최근 1주일 데이터
      {
        queryKey: [FETCHSTOCKDETAIL, detailStock?.srtnCd, currentDate],
        queryFn: () => getStockDetail(detailStock?.srtnCd || "", currentDate),
        enabled: !!detailStock?.srtnCd,
        gcTime: 0,
      },
      // 배당
      // {
      //   queryKey: [FETCHSTOCKALLOCATION, detailStock?.itmsNm, allocationDate()],
      //   queryFn: () =>
      //     getStockAllocation(detailStock?.itmsNm || "", allocationDate()),
      //   enabled: !!detailStock?.itmsNm,
      // },
    ],
  });

  const { isFetching: chartFetching, data: chartData } = fetchsDetail[0];
  // const { isFetching: allocationFetching, data: allocationData } =
  //   fetchsDetail[1];
  // return { chartFetching, allocationFetching, chartData, allocationData };
  return { chartFetching, chartData };
};
