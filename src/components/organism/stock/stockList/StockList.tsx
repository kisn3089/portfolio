import { StockListContainer } from "./StockListStyle";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { FETCHSTOCKLIST } from "@/lib/util/constanse";
import Loading from "@/components/molecule/loading/Loading";
import StockListBody from "./stockListBody/StockListBody";
import StockListFooter from "./stockListFooter/StockListFooter";

export interface StockListProps {
  pagenation: number;
  plusClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const StockList = ({ pagenation, plusClick }: StockListProps) => {
  // 상세 정보에 보여줄 데이터 픽스시 any 해결하기
  const { data: getStockList, isFetching } = useQuery<any[], AxiosError>({
    queryKey: [FETCHSTOCKLIST, pagenation],
    enabled: false,
  });
  console.log("list: ", FETCHSTOCKLIST, +pagenation);
  console.log("getStockList: ", getStockList);

  return (
    <StockListContainer>
      <Loading isLoading={isFetching} />
      <StockListBody isLoading={isFetching} getStockList={getStockList} />
      <StockListFooter plusClick={plusClick} />
    </StockListContainer>
  );
};

export default StockList;
