import { StockListContainer } from "./StockListStyle";
import Loading from "@/components/molecule/loading/Loading";
import StockListBody, { StockBodyProps } from "./stockListBody/StockListBody";
import StockListFooter from "./stockListFooter/StockListFooter";
import { useGetStockList } from "@/hooks/useGetStockList";

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
  const { data: getStockList, isFetching } = useGetStockList({
    search: fetchSearchValue,
    pageNo: pagenation,
    standardData: currentDate,
    enabled: !!fetchSearchValue,
  });

  console.log("List: ", getStockList);

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
