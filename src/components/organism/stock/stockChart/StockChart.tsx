import { useQuery } from "@tanstack/react-query";
import { StockChartContainer } from "./StockChartStyle";
import ReadyGroup from "@/components/molecule/hasReady/readyGroup/ReadyGroup";
import { AxiosError } from "axios";
import { FETCHSTOCKDETAIL } from "@/lib/util/constanse";

interface StockChartProps {
  detailCode: string;
}

const StockChart = ({ detailCode }: StockChartProps) => {
  const { data: getStockDetail, isFetching } = useQuery<any[], AxiosError>({
    queryKey: [FETCHSTOCKDETAIL, detailCode],
    enabled: detailCode !== "",
  });

  console.log("getStockDetail: ", getStockDetail, isFetching);
  return (
    <StockChartContainer>{!isFetching && <ReadyGroup />}</StockChartContainer>
  );
};

export default StockChart;
