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
  // 상세 정보에 보여줄 데이터 픽스시 any 해결하기
  const { data: getStockList, isFetching } = useQuery<any[], AxiosError>({
    queryKey: ["stockList"],
    enabled: false,
  });
  console.log("getStockList: ", getStockList, isFetching);

  return (
    <StockListContainer>
      <Loading $isLoading={isFetching}>Loading...</Loading>
      {getStockList?.map((stock, i) => (
        <StockItem key={i} onClick={() => console.log(stock)}>
          {stock.itmsNm}
          <PriceInfo $flag={Number(stock.fltRt) > 0 ? "up" : "down"}>
            <span>{Number(stock.fltRt)}%</span>
            <span>{Number(stock.clpr).toLocaleString("ko-KR")}</span>
          </PriceInfo>
        </StockItem>
      ))}
      {/* {isFetching ? (
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
      )} */}
      <BottomLayout>
        <PagenationButton>이전</PagenationButton>
        <PagenationButton>다음</PagenationButton>
      </BottomLayout>
    </StockListContainer>
  );
};

export default StockList;
