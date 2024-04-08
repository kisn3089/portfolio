import { theme } from "@/styles/theme";
import styled from "styled-components";

export const StockChartContainer = styled.div`
  width: 100%;
  border-right: ${({ theme }) => `1px solid ${theme.palette.gray}`};

  @media screen and (max-width: ${theme.deviceSize.mobile}) {
    display: none;
  }
`;
