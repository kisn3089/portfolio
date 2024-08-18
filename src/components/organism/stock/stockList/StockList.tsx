import Loading from "@/components/molecule/loading/Loading";
import StockListBody from "./stockListBody/StockListBody";
import StockListFooter from "./stockListFooter/StockListFooter";
import CheckCondition from "@/lib/util/CheckCondition";
import NoData from "@/components/molecule/noData/NoData";
import { Layout } from "./stockListBody/dateHeader/DateHeaderStyles";
import DateHeader from "./stockListBody/dateHeader/DateHeader";
import BeforeFetch from "@/components/molecule/beforeFetch/BeforeFetch";
import * as Svg from "@/components/atoms/icon/index";
import { useContext } from "react";
import { StockListContext } from "../stockInfo/StockInfo";

const StockList = () => {
  const {
    fetchStockList: listStockList,
    totalCount,
    isLoading,
    isFetched,
  } = useContext(StockListContext);

  return (
    <Layout>
      <Loading isLoading={isLoading} />
      <DateHeader />
      <CheckCondition falseCondition={!isFetched}>
        <BeforeFetch content="주식을 검색해보세요." svg={<Svg.StockList />} />
        <CheckCondition falseCondition={!!listStockList}>
          <NoData content="제공된 데이터가 없습니다." />
          <StockListBody />
        </CheckCondition>
      </CheckCondition>
      <StockListFooter dataLength={totalCount} />
    </Layout>
  );
};

export default StockList;
