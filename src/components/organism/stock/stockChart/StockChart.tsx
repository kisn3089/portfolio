import { StockChartContainer } from "./StockChartStyle";
import Loading from "@/components/molecule/loading/Loading";
import { useGetStockDetail } from "@/hooks/useGetStockDetail";
import { SlideRight } from "../stockList/stockListBody/StockListBodyStyles";
import LineChart from "@/components/molecule/lineChart/LineChart";

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
      <SlideRight $isLoading={isFetching}>
        <h1>qwe</h1>
        <LineChart></LineChart>
      </SlideRight>
    </StockChartContainer>
  );
};

export default StockChart;
