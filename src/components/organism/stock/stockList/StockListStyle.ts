import styled from "styled-components";

export const StockListContainer = styled.div`
  width: 100%;
  border: 1px solid #292929;
  padding: 8px 8px;
  display: flex;
  flex-direction: column;
  gap: 6px 0;
`;

export const StockItem = styled.div`
  width: 100%;
  height: 60px;
  border-radius: 8px;
  padding: 0 12px;
  background-color: #292929;
  /* background-color: #ecc8c8; */
  // #d1e2ee
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PriceInfo = styled.div<{ $flag: string }>`
  display: flex;
  width: 30%;
  flex-direction: column;
  color: ${({ $flag }) =>
    $flag === "up" ? "#cf5b5d" : $flag === "down" ? "#2686d3" : "#ddd"};
  /* color: #cf5b5d; */
  // #2686d3
`;
