import { theme } from "@/styles/theme";
import styled from "styled-components";

export const StockDetailContainer = styled.div`
  width: 100%;

  @media screen and (max-width: ${theme.deviceSize.tablet}) {
    display: none;
  }
`;

export const BaseInfoLayout = styled.div`
  width: 100%;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
`;
