import { StockListContainer } from "./StockListStyle";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { FETCHSTOCKLIST } from "@/lib/util/constanse";
import Loading from "@/components/molecule/loading/Loading";
import StockListBody from "./stockListBody/StockListBody";
import StockListFooter from "./stockListFooter/StockListFooter";

interface IStockList {
  plusClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const StockList = ({ plusClick }: IStockList) => {
  // 상세 정보에 보여줄 데이터 픽스시 any 해결하기
  const { data: getStockList, isFetching } = useQuery<any[], AxiosError>({
    queryKey: [FETCHSTOCKLIST],
    enabled: false,
  });
  // console.log("getStockList: ", getStockList, isFetching);

  return (
    <StockListContainer>
      <Loading isLoading={isFetching} />
      <StockListBody isLoading={isFetching} getStockList={getStockList} />
      <StockListFooter plusClick={plusClick} />
    </StockListContainer>
  );
};

export default StockList;
