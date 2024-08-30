import { Layout } from "./StockInfoStyle";
import StockList from "../stockList/StockList";
import StockDetail from "../stockDetail/StockDetail";
import StockChart from "../stockChart/StockChart";
import { StockChartContainer } from "../stockChart/StockChartStyle";
import MobileModal from "@/components/molecule/mobileModal/MobileModal";
import { useSearchParams } from "react-router-dom";
import { createContext, useState } from "react";
import { StockDataTypes } from "@/types/stockData.type";
import useDate from "@/hooks/useDate";
import { GetStockList } from "@/api/GetStock";

type StockListContextType = {
  fetchStockList: StockDataTypes[];
  currentDate: Date;
  isLoading: boolean;
  totalCount: number;
  detailId: string | null;
  isFetched: boolean;
  clickChangeDate: <T extends Element>(e: React.MouseEvent<T>) => void;
  setDetailId: React.Dispatch<React.SetStateAction<string | null>>;
};

export const StockListContext = createContext<StockListContextType>({
  fetchStockList: [],
  currentDate: new Date(),
  isLoading: false,
  totalCount: 0,
  isFetched: false,
  detailId: null,
  clickChangeDate: () => {},
  setDetailId: () => {},
});

const StockInfo = () => {
  const [detailId, setDetailId] = useState<string | null>(null);
  const [query] = useSearchParams();
  const { currentDate, clickChangeDate } = useDate();

  const search = query.get("search") || "";
  const page = +(query.get("page") || 1);

  const {
    data: fetchStockList,
    isLoading,
    isFetched,
  } = GetStockList({
    currentDate,
    search,
    page,
  });

  const listContextValue = {
    fetchStockList: fetchStockList?.items.item || [],
    totalCount: fetchStockList?.totalCount || 0,
    currentDate,
    isLoading,
    isFetched,
    detailId,
    clickChangeDate,
    setDetailId,
  };

  return (
    <Layout>
      <StockListContext.Provider value={listContextValue}>
        <StockChartContainer>
          <StockChart />
        </StockChartContainer>
        <StockDetail />
        <StockList />
      </StockListContext.Provider>
      <MobileModal />
    </Layout>
  );
};

export default StockInfo;
