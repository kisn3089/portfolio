import { StockDetailTypes } from "@/types/stockDetail.type";
import { StockDetailContainer } from "./StockDetailStyle";
import ReadyGroup from "@/components/molecule/hasReady/readyGroup/ReadyGroup";

interface StockDetailProps {
  detailStock: StockDetailTypes;
}

const StockDetail = ({ detailStock }: StockDetailProps) => {
  // console.log("detailCode: ", detailCode);

  return (
    <StockDetailContainer>
      <ReadyGroup />
    </StockDetailContainer>
  );
};

export default StockDetail;
