import { StockDetailContainer } from "./StockDetailStyle";
import ReadyGroup from "@/components/molecule/hasReady/readyGroup/ReadyGroup";

interface StockDetailProps {
  detailCode: string;
}

const StockDetail = ({ detailCode }: StockDetailProps) => {
  // console.log("detailCode: ", detailCode);

  return (
    <StockDetailContainer>
      <ReadyGroup />
    </StockDetailContainer>
  );
};

export default StockDetail;
