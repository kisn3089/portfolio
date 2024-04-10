import { getStockDetail } from "@/lib/api/getStockDetail";
import { FETCHSTOCKDETAIL } from "@/lib/util/constanse";
import { StockDataTypes } from "@/types/stockData.type";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

interface useGetStockDetailProps {
  code: string;
  standardData: Date;
  enabled: boolean;
}

export const useGetStockDetail = ({
  code,
  standardData,
  enabled,
}: useGetStockDetailProps) => {
  return useQuery<StockDataTypes[], AxiosError>({
    queryKey: [FETCHSTOCKDETAIL, code, standardData],
    queryFn: () => getStockDetail(code, standardData),
    enabled: enabled,
  });
};
