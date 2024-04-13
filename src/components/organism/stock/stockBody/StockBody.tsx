import { StockBodyContainer } from "./StockBodyStyle";
import StockList, { StockListProps } from "../stockList/StockList";
import StockDetail from "../stockDetail/StockDetail";
import StockChart from "../stockChart/StockChart";
import { useStockDetail } from "@/hooks/useStockDetail";
import Modal from "@/components/molecule/modal/Modal";
import { StockChartContainer } from "../stockChart/StockChartStyle";
import { getStockAllocation } from "@/lib/api/getStockAllocation";
import { useQueries } from "@tanstack/react-query";
import { FETCHSTOCKALLOCATION, FETCHSTOCKDETAIL } from "@/lib/util/constanse";
import { getStockDetail } from "@/lib/api/getStockDetail";
import { allocationDate } from "@/lib/util/adjustDate";
import { useGetDetail } from "@/hooks/useGetDetail";

interface StockBodyProps extends Omit<StockListProps, "fetchDetail"> {}

const StockBody = ({
  currentDate,
  pagenation,
  fetchSearchValue,
  isInit,
  footerClick,
  clickChangeDate,
}: StockBodyProps) => {
  const { detailStock, showModal, fetchDetail, closeModal } = useStockDetail();

  const { chartFetching, allocationFetching, chartData, allocationData } =
    useGetDetail({ currentDate: currentDate, detailStock: detailStock });
  // console.log("tt1: ", chartFetching, chartData);
  // console.log("tt2: ", allocationFetching, allocationData);

  return (
    <StockBodyContainer>
      <StockChartContainer>
        <StockChart
          getStockDetail={chartData}
          isFetching={chartFetching}
          detailStock={detailStock}
        />
      </StockChartContainer>
      <StockDetail
        detailStock={detailStock}
        allocationData={allocationData}
        allocationFetching={allocationFetching}
      />
      <StockList
        currentDate={currentDate}
        pagenation={pagenation}
        fetchSearchValue={fetchSearchValue}
        isInit={isInit}
        footerClick={footerClick}
        fetchDetail={fetchDetail}
        clickChangeDate={clickChangeDate}
      />
      <Modal
        showModal={showModal}
        getStockDetail={chartData}
        isFetching={chartFetching}
        allocationFetching={allocationFetching}
        allocationData={allocationData}
        detailStock={detailStock}
        closeModal={closeModal}
      />
    </StockBodyContainer>
  );
};

export default StockBody;
