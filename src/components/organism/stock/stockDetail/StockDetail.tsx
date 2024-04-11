import { StockDataTypes } from "@/types/stockData.type";
import { StockDetailContainer } from "./StockDetailStyle";
import ReadyGroup from "@/components/molecule/hasReady/readyGroup/ReadyGroup";

interface StockDetailProps {
  detailStock?: StockDataTypes;
}

const StockDetail = ({ detailStock }: StockDetailProps) => {
  // console.log("detailStock: ", detailStock);

  return (
    <StockDetailContainer>
      <ReadyGroup />
    </StockDetailContainer>
  );
};

export default StockDetail;
