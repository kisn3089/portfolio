import { theme } from "@/styles/theme";
import styled from "styled-components";

export const StockBodyContainer = styled.div`
  width: 100%;
  height: 700px;
  display: grid;
  grid-template-columns: 1fr 250px 250px;
  border: ${({ theme }) => `1px solid ${theme.palette.gray}`};
  border-radius: 8px;

  @media screen and (max-width: ${theme.deviceSize.desktop}) {
    grid-template-columns: 1fr 180px 220px;
  }

  @media screen and (max-width: ${theme.deviceSize.tablet}) {
    grid-template-columns: 1fr 220px;
  }

  @media screen and (max-width: ${theme.deviceSize.mobile}) {
    grid-template-columns: 1fr;
  }
`;
