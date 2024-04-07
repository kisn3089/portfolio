import { getStockDetail } from "@/lib/api/getStockDetail";
import { getStockList } from "@/lib/api/getStockList";
import { FETCHSTOCKDETAIL, FETCHSTOCKLIST } from "@/lib/util/constanse";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

interface useGetStockProps {
  search?: string;
  pageNo?: number;
  code?: string;
}

export const useGetStock = ({
  search = "",
  pageNo = 1,
  code = "",
}: useGetStockProps) => {
  const getList = useQuery<any[], AxiosError>({
    queryKey: [FETCHSTOCKLIST, pageNo],
    queryFn: () => getStockList(search.trim().toLocaleUpperCase(), pageNo),
    enabled: pageNo !== 1,
  });

  const getDetail = useQuery<any[], AxiosError>({
    queryKey: [FETCHSTOCKDETAIL, code],
    queryFn: () => getStockDetail(code),
    enabled: code !== "",
  });

  return { getList, getDetail };
};
