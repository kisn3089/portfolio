import { StockChartContainer } from "./StockChartStyle";
import Loading from "@/components/molecule/loading/Loading";
import { useGetStockDetail } from "@/hooks/useGetStockDetail";

interface StockChartProps {
  detailCode: string;
  currentDate: Date;
}

const StockChart = ({ detailCode, currentDate }: StockChartProps) => {
  const { data: getStockDetail, isFetching } = useGetStockDetail({
    code: detailCode,
    standardData: currentDate,
    enabled: !!detailCode,
  });

  console.log("getStockDetail: ", getStockDetail, isFetching);
  return (
    <StockChartContainer>
      <Loading isLoading={isFetching} />
    </StockChartContainer>
  );
};

export default StockChart;
