import {
  AllocationLayout,
  BaseInfoLayout,
  Column,
  Notice,
} from "./DetailInfoStyles";
import BaseInfo from "../baseInfo/BaseInfo";
import { StockDetailProps } from "../StockDetail";

const DetailInfo = ({ detailStock }: StockDetailProps) => {
  return (
    <Column>
      <BaseInfoLayout>
        <BaseInfo detailStock={detailStock} />
      </BaseInfoLayout>
      <AllocationLayout>
        <Notice>배당 정보가 정확하지 않습니다.</Notice>
      </AllocationLayout>
    </Column>
  );
};

export default DetailInfo;
