import { StockListContainer } from "./StockListStyle";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { FETCHSTOCKLIST } from "@/lib/util/constanse";
import Loading from "@/components/molecule/loading/Loading";
import StockListBody, { StockBodyProps } from "./stockListBody/StockListBody";
import StockListFooter from "./stockListFooter/StockListFooter";
import useDate from "@/hooks/useDate";

export interface StockListProps extends Omit<StockBodyProps, "isLoading"> {
  fetchSearchValue: string;
  pagenation: number;
  footerClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const StockList = ({
  currentDate,
  pagenation,
  fetchSearchValue,
  footerClick,
  fetchDetail,
  clickChangeDate,
}: StockListProps) => {
  // 상세 정보에 보여줄 데이터 픽스시 any 해결하기
  const { data: getStockList, isFetching } = useQuery<any[], AxiosError>({
    queryKey: [FETCHSTOCKLIST, fetchSearchValue, pagenation, currentDate],
    enabled: !!fetchSearchValue,
  });

  // console.log("getStockList: ", getStockList);

  return (
    <StockListContainer>
      <Loading isLoading={isFetching} />
      <StockListBody
        currentDate={currentDate}
        isLoading={isFetching}
        getStockList={getStockList}
        fetchDetail={fetchDetail}
        clickChangeDate={clickChangeDate}
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
