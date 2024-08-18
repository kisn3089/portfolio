import Loading from "@/components/molecule/loading/Loading";
import StockListBody, { StockBodyProps } from "./stockListBody/StockListBody";
import StockListFooter from "./stockListFooter/StockListFooter";
import CheckCondition from "@/lib/util/CheckCondition";
import NoData from "@/components/molecule/noData/NoData";
import { Layout } from "./stockListBody/dateHeader/DateHeaderStyles";
import DateHeader from "./stockListBody/dateHeader/DateHeader";
import BeforeFetch from "@/components/molecule/beforeFetch/BeforeFetch";
import * as Svg from "@/components/atoms/icon/index";
import { GetStockList } from "@/api/GetStock";
import useDate from "@/hooks/useDate";
import { useSearchParams } from "react-router-dom";
import { StockDataTypes } from "@/types/stockData.type";
import { createContext } from "react";

type StockListContextType = {
  listStockList?: StockDataTypes[];
  currentDate: Date;
  clickChangeDate: <T extends Element>(e: React.MouseEvent<T>) => void;
};

export const StockListContext = createContext<StockListContextType>({
  listStockList: [],
  currentDate: new Date(),
  clickChangeDate: () => {},
});

const StockList = () => {
  const [query] = useSearchParams();
  const { currentDate, clickChangeDate } = useDate();

  const search = query.get("search") || "";
  const page = +(query.get("page") || 1);

  const { data: listStockList, isLoading } = GetStockList({
    currentDate,
    search,
    page,
  });

  console.log(listStockList);

  const listContextValue = {
    listStockList,
    currentDate,
    clickChangeDate,
  };

  return (
    <Layout>
      <Loading isLoading={isLoading} />
      <StockListContext.Provider value={listContextValue}>
        <DateHeader />
        {/* <CheckCondition falseCondition={!isFetched}>
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
      <StockListFooter dataLength={getStockList?.length} /> */}
      </StockListContext.Provider>
    </Layout>
  );
};

export default StockList;
