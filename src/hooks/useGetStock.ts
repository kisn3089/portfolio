import { getStock } from "@/lib/api/getStock";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import React from "react";

export const useGetStock = (search: string, pageNo?: number) => {
  return useQuery<any[], AxiosError>({
    queryKey: ["stockList"],
    queryFn: async () => await getStock(search.toLocaleUpperCase(), pageNo),
    enabled: false,
  });
};
