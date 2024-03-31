import { getStock } from "@/lib/api/getStock";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import React from "react";

export const useGetStock = (search: string) => {
  return useQuery<any[], AxiosError>({
    queryKey: ["stockList"],
    queryFn: async () => await getStock(search.toLocaleUpperCase()),
    enabled: false,
  });
};
