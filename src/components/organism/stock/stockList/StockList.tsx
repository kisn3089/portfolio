import { StockListContainer } from "./StockListStyle";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { FETCHSTOCKLIST } from "@/lib/util/constanse";
import Loading from "@/components/molecule/loading/Loading";
import StockListBody from "./stockListBody/StockListBody";
import StockListFooter from "./stockListFooter/StockListFooter";

export interface StockListProps {
  pagenation: number;
  footerClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  fetchDetail: (stock: any) => void;
}

const StockList = ({
  pagenation,
  footerClick,
  fetchDetail,
}: StockListProps) => {
  // 상세 정보에 보여줄 데이터 픽스시 any 해결하기
  const { data: getStockList, isFetching } = useQuery<any[], AxiosError>({
    queryKey: [FETCHSTOCKLIST, pagenation],
    enabled: pagenation !== 1,
  });

  // console.log("getStockList: ", getStockList, isFetching);

  return (
    <StockListContainer>
      <Loading isLoading={isFetching} />
      <StockListBody
        isLoading={isFetching}
        getStockList={getStockList}
        fetchDetail={fetchDetail}
      />
      <StockListFooter
        dataLength={getStockList?.length}
        pagenation={pagenation}
        footerClick={footerClick}
      />
    </StockListContainer>
  );
};

export default StockList;
