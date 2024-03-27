import { ScaleUp } from "@/styles/Animation";
import styled, { css } from "styled-components";

export const StockSection = styled.section`
  width: 100%;
  padding: 0 100px;
`;

export const StockHeaderStyle = styled.header`
  width: 100%;
  height: 80px;
  margin-top: 40px;
  display: flex;
  justify-content: end;
  align-items: center;
  border: 1px solid #292929;
`;

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  svg {
    position: absolute;
    fill: ${({ theme }) => theme.palette.gray100};
    cursor: pointer;
    animation: ${({ theme }) =>
      css`
        ${ScaleUp} 0.3s ${theme.ts.smooth}
      `};
  }
  .close {
    right: 5%;
  }

  .search {
    right: 6%;
  }
`;
