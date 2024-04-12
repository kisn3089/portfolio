import { StockChartContainer } from "./StockChartStyle";
import Loading from "@/components/molecule/loading/Loading";
import { useGetStockDetail } from "@/hooks/useGetStockDetail";
import { SlideRight } from "../stockList/stockListBody/StockListBodyStyles";
import LineChart from "@/components/molecule/lineChart/LineChart";
import { StockDataTypes } from "@/types/stockData.type";
import CheckCondition from "@/lib/util/CheckCondition";
import NoData from "@/components/molecule/noData/NoData";
import BeforeFetch from "@/components/molecule/beforeFetch/BeforeFetch";

interface StockChartProps {
  detailStock?: StockDataTypes;
  currentDate: Date;
}

const StockChart = ({ detailStock, currentDate }: StockChartProps) => {
  const { data: getStockDetail, isFetching } = useGetStockDetail({
    code: detailStock?.srtnCd || "",
    standardData: currentDate,
    enabled: !!detailStock?.srtnCd,
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

  return (
    <StockChartContainer>
      <Loading isLoading={isFetching} />
      <SlideRight $isLoading={isFetching}>
        <CheckCondition falseCondition={!detailStock?.itmsNm || false}>
          <BeforeFetch content="주식을 선택해주세요." />
          {/* <h1>최근 1주일 주식가격</h1> */}
          <CheckCondition falseCondition={!stockData[1]}>
            <NoData content="제공되는 데이터가 없습니다." />
            <LineChart chartData={chartData} range={{ min: min, max: max }} />
          </CheckCondition>
        </CheckCondition>
      </SlideRight>
    </StockChartContainer>
  );
};

export default StockChart;
