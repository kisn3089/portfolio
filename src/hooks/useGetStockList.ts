import { getStockList } from "@/lib/api/getStockList";
import { FETCHSTOCKLIST } from "@/lib/util/constanse";
import { StockDataTypes } from "@/types/stockData.type";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

interface useGetStockListProps {
  search: string;
  pageNo: number;
  standardData: Date;
  enabled: boolean;
}

export const useGetStockList = ({
  search,
  pageNo,
  standardData,
  enabled,
}: useGetStockListProps) => {
  return useQuery<StockDataTypes[], AxiosError>({
    queryKey: [FETCHSTOCKLIST, search, pageNo, standardData],
    queryFn: () =>
      getStockList(search.trim().toLocaleUpperCase(), standardData, pageNo),
    enabled: enabled,
  });
};
