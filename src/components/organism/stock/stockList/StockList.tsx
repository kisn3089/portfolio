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
}

const StockList = ({ pagenation, footerClick }: StockListProps) => {
  // 상세 정보에 보여줄 데이터 픽스시 any 해결하기
  const { data: getStockList, isFetching } = useQuery<any[], AxiosError>({
    queryKey: [FETCHSTOCKLIST, pagenation],
    enabled: pagenation !== 1,
  });

  const filteredDupli: any[] = getStockList?.reduce((acc, cur) => {
    if (!acc.some((item: any) => item.itmsNm === cur.itmsNm)) {
      acc.push(cur);
    }
    return acc;
  }, []);
  console.log("filteredDupli: ", filteredDupli);

  return (
    <StockListContainer>
      <Loading isLoading={isFetching} />
      <StockListBody isLoading={isFetching} getStockList={filteredDupli} />
      <StockListFooter
        dataLength={filteredDupli?.length}
        pagenation={pagenation}
        footerClick={footerClick}
      />
    </StockListContainer>
  );
};

export default StockList;
