import Loading from "@/components/molecule/loading/Loading";
import StockListBody, { StockBodyProps } from "./stockListBody/StockListBody";
import StockListFooter from "./stockListFooter/StockListFooter";
import { useGetStockList } from "@/hooks/useGetStockList";
import CheckCondition from "@/lib/util/CheckCondition";
import NoData from "@/components/molecule/noData/NoData";
import BeforeFetch from "@/components/molecule/beforeFetch/BeforeFetch";
import { StockListContainer } from "./stockListBody/dateHeader/DateHeaderStyles";
import DateHeader from "./stockListBody/dateHeader/DateHeader";
import * as Svg from "@/components/atoms/icon/index";

export interface StockListProps extends Omit<StockBodyProps, "isLoading"> {
  currentDate: Date;
  fetchSearchValue: string;
  pagenation: number;
  isInit: boolean;
  footerClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  clickChangeDate: (e: React.MouseEvent) => void;
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
      <DateHeader
        currentDate={currentDate}
        getStockList={getStockList}
        clickChangeDate={clickChangeDate}
      />
      <CheckCondition falseCondition={isInit}>
        <BeforeFetch content="주식을 검색해보세요." svg={<Svg.StockList />} />
        <CheckCondition falseCondition={!getStockList[1]}>
          <NoData content="제공된 데이터가 없습니다." />
          <StockListBody
            isLoading={isFetching}
            getStockList={getStockList}
            fetchDetail={fetchDetail}
          />
        </CheckCondition>
      </CheckCondition>
      <StockListFooter
        dataLength={getStockList?.length}
        pagenation={pagenation}
        footerClick={footerClick}
      />
    </StockListContainer>
  );
};

export default StockList;
