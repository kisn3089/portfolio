import { theme } from "@/styles/theme";
import styled from "styled-components";

export const StockChartContainer = styled.div`
  position: relative;
  width: 100%;
  border-right: 1px solid ${theme.palette.gray50};

  @media screen and (max-width: ${theme.deviceSize.mobile}) {
    display: none;
  }
`;

export const NoChartData = styled.h1`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
