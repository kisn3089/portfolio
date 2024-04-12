import { theme } from "@/styles/theme";
import styled from "styled-components";

export const ChartLayout = styled.div`
  position: relative;
  padding: 0 24px;
  width: 100%;
  height: 96%;

  @media screen and (max-width: ${theme.deviceSize.mobile}) {
    padding: 0 12px;
  }
`;
