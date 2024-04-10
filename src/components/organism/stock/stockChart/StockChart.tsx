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
  const stockData =
    getStockDetail
      ?.map((chartItem) => ({
        x: chartItem.basDt,
        y: chartItem.clpr,
      }))
      .reverse() || [];
  const onlyValue = stockData.map((item) => Number(item.y));
  const min = Math.min(...onlyValue);
  const max = Math.max(...onlyValue);
  const chartData = [{ id: "stock", data: stockData }];
  console.log("stockData: ", stockData);
  console.log("chartData: ", chartData);

  return (
    <StockChartContainer>
      <Loading isLoading={isFetching} />
      <SlideRight $isLoading={isFetching}>
        <h1>최근 1주일 주가</h1>
        {stockData[1] ? (
          <LineChart chartData={chartData} range={{ min: min, max: max }} />
        ) : (
          <div></div>
        )}
      </SlideRight>
    </StockChartContainer>
  );
};

export default StockChart;
