import { StockListContainer } from "./StockListStyle";
import Loading from "@/components/molecule/loading/Loading";
import StockListBody, { StockBodyProps } from "./stockListBody/StockListBody";
import StockListFooter from "./stockListFooter/StockListFooter";
import { useGetStockList } from "@/hooks/useGetStockList";
import CheckCondition from "@/lib/util/CheckCondition";
import NoData from "@/components/molecule/noData/NoData";
import BeforeFetch from "@/components/molecule/beforeFetch/BeforeFetch";

export interface StockListProps extends Omit<StockBodyProps, "isLoading"> {
  fetchSearchValue: string;
  pagenation: number;
  isInit: boolean;
  footerClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const StockList = ({
  currentDate,
  pagenation,
  fetchSearchValue,
  isInit,
  footerClick,
  fetchDetail,
  clickChangeDate,
}: StockListProps) => {
  // 상세 정보에 보여줄 데이터 픽스시 any 해결하기
  const { data: getStockList = [], isFetching } = useGetStockList({
    search: fetchSearchValue,
    pageNo: pagenation,
    standardData: currentDate,
    enabled: !!fetchSearchValue,
  });

  console.log("List: ", getStockList);
  console.log("isInit: ", isInit);

  return (
    <StockListContainer>
      <Loading isLoading={isFetching} />
      {isInit ? (
        <BeforeFetch />
      ) : (
        <CheckCondition falseCondition={!getStockList[1]}>
          <NoData content="제공된 데이터가 없습니다." />
          <StockListBody
            currentDate={currentDate}
            isLoading={isFetching}
            getStockList={getStockList}
            fetchDetail={fetchDetail}
            clickChangeDate={clickChangeDate}
          />
        </CheckCondition>
      )}
      <StockListFooter
        dataLength={getStockList?.length}
        pagenation={pagenation}
        footerClick={footerClick}
      />
    </StockListContainer>
  );
};

export default StockList;
