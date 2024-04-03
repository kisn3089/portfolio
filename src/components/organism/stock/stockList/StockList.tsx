import {
  BottomLayout,
  PagenationButton,
  PriceInfo,
  SlideRight,
  StockItem,
  StockListContainer,
} from "./StockListStyle";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { FETCHSTOCKLIST } from "@/lib/util/constanse";
import Loading from "@/components/molecule/loading/Loading";

interface IStockList {
  plusClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const StockList = ({ plusClick }: IStockList) => {
  // 상세 정보에 보여줄 데이터 픽스시 any 해결하기
  const { data: getStockList, isFetching } = useQuery<any[], AxiosError>({
    queryKey: [FETCHSTOCKLIST],
    enabled: false,
  });
  // console.log("getStockList: ", getStockList, isFetching);

  return (
    <StockListContainer>
      <Loading isLoading={isFetching} />
      <SlideRight $isLoading={isFetching}>
        {getStockList?.map((stock, i) => (
          <StockItem key={i} onClick={() => console.log(stock)}>
            {stock.itmsNm}
            <PriceInfo $flag={Number(stock.fltRt) > 0 ? "up" : "down"}>
              <span>{Number(stock.fltRt)}%</span>
              <span>{Number(stock.clpr).toLocaleString("ko-KR")}</span>
            </PriceInfo>
          </StockItem>
        ))}
      </SlideRight>
      <BottomLayout>
        <PagenationButton disabled>PREV</PagenationButton>
        <PagenationButton disabled onClick={plusClick}>
          NEXT
        </PagenationButton>
      </BottomLayout>
    </StockListContainer>
  );
};

export default StockList;
