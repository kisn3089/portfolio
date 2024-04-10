import { getStockDetail } from "@/lib/api/getStockDetail";
import { getStockList } from "@/lib/api/getStockList";
import { FETCHSTOCKDETAIL, FETCHSTOCKLIST } from "@/lib/util/constanse";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

interface useGetStockProps {
  search?: string;
  pageNo?: number;
  code?: string;
  standardData: Date;
  enabled: boolean;
}
// 옵셔널 타입의 혼재가 있으므로 list와 detail hooks을 나눌것

export const useGetStock = ({
  search = "",
  pageNo = 1,
  code = "",
  standardData = new Date(),
  enabled,
}: useGetStockProps) => {
  const getList = useQuery<any[], AxiosError>({
    queryKey: [FETCHSTOCKLIST, search, pageNo, standardData],
    queryFn: () =>
      getStockList(search.trim().toLocaleUpperCase(), standardData, pageNo),
    enabled: enabled,
  });

  const getDetail = useQuery<any[], AxiosError>({
    queryKey: [FETCHSTOCKDETAIL, code],
    queryFn: () => getStockDetail(code, standardData),
    enabled: !!code,
  });

  return { getList, getDetail };
};
