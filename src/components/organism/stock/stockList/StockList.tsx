import {
  BottomLayout,
  Loading,
  PagenationButton,
  PriceInfo,
  StockItem,
  StockListContainer,
} from "./StockListStyle";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

const StockList = () => {
  const { data: getStockList, isFetching } = useQuery<any[], AxiosError>({
    queryKey: ["stockList"],
    enabled: false,
  });
  console.log("getStockList: ", getStockList, isFetching);

  return (
    <StockListContainer>
      {isFetching ? (
        <Loading>Loading...</Loading>
      ) : (
        getStockList?.map((stock, i) => (
          <StockItem key={i} onClick={() => console.log(stock)}>
            {stock.itmsNm}
            <PriceInfo $flag={Number(stock.fltRt) > 0 ? "up" : "down"}>
              <span>{Number(stock.fltRt)}%</span>
              <span>{Number(stock.clpr).toLocaleString("ko-KR")}</span>
            </PriceInfo>
          </StockItem>
        ))
      )}
      <BottomLayout>
        <PagenationButton>이전</PagenationButton>
        <PagenationButton>다음</PagenationButton>
      </BottomLayout>
    </StockListContainer>
  );
};

export default StockList;
