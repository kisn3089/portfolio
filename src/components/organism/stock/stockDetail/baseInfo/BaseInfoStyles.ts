import { theme } from "@/styles/theme";
import styled from "styled-components";

export const BaseInfoLayout = styled.div`
  display: flex;
  flex-direction: column;
  opacity: 0;
  ${theme.animation.fadeIn({
    name: "baseInfoLayout",
    duration: "1s",
    transtion: theme.ts.moreFast,
    opacity: 0,
    direction: "forwards",
  })}
`;

export const StockName = styled.span`
  font-size: ${theme.fontSize.medium};
  font-weight: ${theme.fontWeight.bold};
  font-family: ${theme.fontFamily.ko};
  text-align: center;
  margin-bottom: 20px;
`;

export const BaseInfoContainer = styled.div`
  background-color: ${theme.palette.gray};
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px;
  border-radius: 8px;
`;

export const BaseInfoTitle = styled.span`
  font-size: ${theme.fontSize.mini};
  font-weight: ${theme.fontWeight.regular};
  font-family: ${theme.fontFamily.ko};
  color: ${theme.palette.gray200};
`;

export const BaseInfoContent = styled.span`
  font-size: ${theme.fontSize.small};
  font-weight: ${theme.fontWeight.regular};
  font-family: ${theme.fontFamily.ko};
  color: ${theme.palette.gray100};
  letter-spacing: 1px;
  vertical-align: middle;
`;
