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
  const tt = useQueries({
    queries: [
      {
        queryKey: [FETCHSTOCKDETAIL, detailStock?.srtnCd, currentDate],
        queryFn: () => getStockDetail(detailStock?.srtnCd || "", currentDate),
        enabled: !!detailStock?.srtnCd,
      },
      {
        queryKey: [FETCHSTOCKALLOCATION, detailStock?.itmsNm, currentDate],
        queryFn: () =>
          getStockAllocation(detailStock?.itmsNm || "", currentDate),
        enabled: !!detailStock?.itmsNm,
      },
    ],
  });
  const { isFetching: chartFetching, data: chartData } = tt[0];
  const { isFetching: allocationFetching, data: allocationData } = tt[1];
  console.log("tt1: ", chartData);
  console.log("tt2: ", allocationData);

  // const ttt = async () => {
  //   const tt = await getStockAllocation(detailStock?.itmsNm || "", currentDate);
  //   console.log(tt);
  // };
  // ttt();

  return (
    <StockBodyContainer>
      <StockChartContainer>
        <StockChart
          getStockDetail={chartData}
          isFetching={chartFetching}
          detailStock={detailStock}
          currentDate={currentDate}
        />
      </StockChartContainer>
      <StockDetail detailStock={detailStock} />
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
        detailStock={detailStock}
        currentDate={currentDate}
        closeModal={closeModal}
      />
    </StockBodyContainer>
  );
};

export default StockBody;
