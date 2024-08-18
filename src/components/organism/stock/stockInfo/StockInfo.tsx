import { Layout } from "./StockInfoStyle";
import StockList from "../stockList/StockList";
import StockDetail from "../stockDetail/StockDetail";
import StockChart from "../stockChart/StockChart";
import { useStockDetail } from "@/hooks/useStockDetail";
import { StockChartContainer } from "../stockChart/StockChartStyle";
import { useGetDetail } from "@/hooks/useGetDetail";
import MobileModal from "@/components/molecule/mobileModal/MobileModal";
import { useSearchParams } from "react-router-dom";
import { Suspense } from "react";

const StockInfo = () => {
  const [query] = useSearchParams();
  console.log(query.get("search"));
  console.log(query.get("page"));

  // const { detailStock, showModal, fetchDetail, closeModal } = useStockDetail();

  // const { chartFetching, chartData } = useGetDetail({
  //   currentDate: currentDate,
  //   detailStock: detailStock,
  // });

  return (
    <Layout>
      {/* <StockChartContainer>
        <StockChart
          getStockDetail={chartData}
          isFetching={chartFetching}
          detailStock={detailStock}
        />
      </StockChartContainer>
      <StockDetail detailStock={detailStock} /> */}
      <StockList />
      {/* <MobileModal
        showModal={showModal}
        getStockDetail={chartData}
        isFetching={chartFetching}
        detailStock={detailStock}
        closeModal={closeModal}
      /> */}
    </Layout>
  );
};

export default StockInfo;
