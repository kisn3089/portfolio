import { StockBodyContainer } from "./StockBodyStyle";
import StockList, { StockListProps } from "../stockList/StockList";
import StockDetail from "../stockDetail/StockDetail";
import StockChart from "../stockChart/StockChart";
import { useStockDetail } from "@/hooks/useStockDetail";
import Modal from "@/components/molecule/modal/Modal";
import { StockChartContainer } from "../stockChart/StockChartStyle";
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

  // const { chartFetching, allocationFetching, chartData, allocationData } =
  const { chartFetching, chartData } = useGetDetail({
    currentDate: currentDate,
    detailStock: detailStock,
  });

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
        // allocationData={allocationData}
        // allocationFetching={allocationFetching}
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
        // allocationFetching={allocationFetching}
        // allocationData={allocationData}
        detailStock={detailStock}
        closeModal={closeModal}
      />
    </StockBodyContainer>
  );
};

export default StockBody;
