import { AppearUp, FadeDown, FadeUp } from "@/styles/Animation";
import styled, { css } from "styled-components";

export const StockListContainer = styled.div`
  position: relative;
  width: 100%;
  border: ${({ theme }) => `1px solid ${theme.palette.gray}`};
  padding: 8px 8px;
  display: flex;
  flex-direction: column;
  gap: 6px 0;
`;

export const StockItem = styled.div`
  width: 100%;
  height: 54px;
  border-radius: 8px;
  padding: 0 12px;
  background-color: ${({ theme }) => theme.palette.gray};
  cursor: pointer;
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
  color: ${({ $flag, theme }) =>
    $flag === "up"
      ? theme.palette.red
      : $flag === "down"
      ? theme.palette.blue
      : theme.palette.gray100};
  /* color: #cf5b5d; */
  // #2686d3
`;

export const Loading = styled.div<{ $isLoading: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: ${({ $isLoading }) => !$isLoading && "none"};
  animation: ${({ theme, $isLoading }) =>
    css`
      ${$isLoading ? AppearUp : FadeDown} ${$isLoading
        ? "0.6s"
        : "0.4s"} ${theme.ts.moreFast}
    `};
  animation-fill-mode: forwards;
`;

export const BottomLayout = styled.div`
  position: absolute;
  width: 100%;
  height: 40px;
  left: 0;
  bottom: 2%;
  display: flex;
  flex-direction: row;
  gap: 0 10px;
  padding: 0 12px;
`;

export const PagenationButton = styled.button`
  width: 50%;
  height: 100%;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.palette.white};
  color: ${({ theme }) => theme.palette.black};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
`;
