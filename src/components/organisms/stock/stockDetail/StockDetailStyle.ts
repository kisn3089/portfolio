import { theme } from "@/styles/theme";
import styled from "styled-components";

export const StockDetailContainer = styled.div`
  width: 100%;

  @media screen and (max-width: ${theme.deviceSize.tablet}) {
    display: none;
  }
`;
