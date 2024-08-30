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
