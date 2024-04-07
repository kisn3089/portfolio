import { getStock } from "@/lib/api/getStock";
import { FETCHSTOCKLIST } from "@/lib/util/constanse";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useGetStock = (search: string, pageNo: number) => {
  return useQuery<any[], AxiosError>({
    queryKey: [FETCHSTOCKLIST, pageNo],
    queryFn: () => getStock(search.trim().toLocaleUpperCase(), pageNo),
    enabled: pageNo !== 1,
  });
};
