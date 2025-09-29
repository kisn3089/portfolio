import Loading from "@/components/molecules/loading/Loading";
import { SlideRight } from "../stockList/stockListBody/StockListBodyStyles";
import LineChart from "@/components/molecules/lineChart/LineChart";
import CheckCondition from "@/lib/util/CheckCondition";
import NoData from "@/components/molecules/noData/NoData";
import BeforeFetch from "@/components/molecules/beforeFetch/BeforeFetch";
import * as Svg from "@/components/atoms/icon/index";
import { useContext } from "react";
import { StockListContext } from "../stockInfo/StockInfo";
import { GetStockChart } from "@/api/GetStock";

interface StockChartProps {
  bgColor?: string;
}

const StockChart = ({ bgColor }: StockChartProps) => {
  const { detailId, currentDate } = useContext(StockListContext);
  const { data: charInfo, isLoading } = GetStockChart({
    stockCode: detailId || "",
    currentDate,
  });

  const stockData =
    charInfo
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
    <>
      <Loading isLoading={isLoading} bgColor={bgColor} />
      <SlideRight $isLoading={isLoading}>
        <CheckCondition falseCondition={!detailId}>
          <BeforeFetch content="주식을 선택해주세요." svg={<Svg.StockIcon />} />
          <CheckCondition falseCondition={stockData.length === 0}>
            <NoData content="제공되는 데이터가 없습니다." />
            <LineChart chartData={chartData} range={{ min: min, max: max }} />
          </CheckCondition>
        </CheckCondition>
      </SlideRight>
    </>
  );
};

export default StockChart;
