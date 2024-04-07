import { theme } from "@/styles/theme";
import styled from "styled-components";

export const StockBodyContainer = styled.div`
  width: 100%;
  height: 700px;
  display: grid;
  grid-template-columns: 1fr 250px 220px;

  @media screen and (max-width: ${theme.deviceSize.desktop}) {
    grid-template-columns: 1fr 180px 200px;
  }
`;
