import { theme } from "@/styles/theme";
import styled from "styled-components";

export const SlideRight = styled.div<{ $isLoading: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  gap: 6px 0;
  will-change: transform opacity;
  ${({ theme, $isLoading }) =>
    theme.animation.fadeIn({
      name: $isLoading ? "rightHide" : "rightShow",
      duration: $isLoading ? "0.4s" : "0.6s",
      beginTransform: $isLoading ? undefined : "translate3d(14%, 0, 0)",
      endTransform: $isLoading ? "translate3d(14%, 0, 0)" : undefined,
      opacity: $isLoading ? 1 : 0,
      direction: "forwards",
      transtion: theme.ts.moreFast,
    })};
  z-index: 4;

  @media screen and (max-width: ${theme.deviceSize.mobile}) {
    padding: 0 10px;
  }
`;

export const StockItem = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 6px;
  padding: 0 12px;
  background-color: ${theme.palette.gray};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${theme.fontSize.extraMini};
  font-weight: ${theme.fontWeight.bold};
  font-family: ${theme.fontFamily.ko};
`;

export const StockItemInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StockCode = styled.span`
  color: ${theme.palette.gray200};
  font-size: ${theme.fontSize.mobileSmall};
  font-weight: ${theme.fontWeight.regular};
`;

export const PriceInfo = styled.div<{ $flag: string }>`
  display: flex;
  width: 30%;
  flex-direction: column;
  font-size: ${theme.fontSize.extraMini};
  font-weight: ${theme.fontWeight.bold};
  color: ${({ $flag, theme }) =>
    $flag === "up"
      ? theme.palette.red
      : $flag === "down"
      ? theme.palette.blue
      : theme.palette.gray100};
`;
