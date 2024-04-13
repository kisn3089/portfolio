import { StockBodyContainer } from "./StockBodyStyle";
import StockList, { StockListProps } from "../stockList/StockList";
import StockDetail from "../stockDetail/StockDetail";
import StockChart from "../stockChart/StockChart";
import { useStockDetail } from "@/hooks/useStockDetail";
import Modal from "@/components/molecule/modal/Modal";
import { StockChartContainer } from "../stockChart/StockChartStyle";
import { getStockAllocation } from "@/lib/api/getStockAllocation";

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
  // if (detailStock) getStockAllocation(detailStock?.itmsNm, currentDate);
  return (
    <StockBodyContainer>
      <StockChartContainer>
        <StockChart detailStock={detailStock} currentDate={currentDate} />
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
        detailStock={detailStock}
        currentDate={currentDate}
        closeModal={closeModal}
      />
    </StockBodyContainer>
  );
};

export default StockBody;
