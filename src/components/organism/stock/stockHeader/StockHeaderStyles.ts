import { theme } from "@/styles/theme";
import styled from "styled-components";

export const StockSection = styled.section`
  width: 100%;
  height: calc(100vh - 100px);
  min-height: 900px;
  padding: 0 60px 60px 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: ${theme.deviceSize.tablet}) {
    padding: 0 40px 40px 40px;
  }

  @media screen and (max-width: ${theme.deviceSize.mobile}) {
    padding: 0 20px 20px 20px;
  }
`;

export const StockHeaderStyle = styled.header`
  width: 100%;
  height: 80px;
  margin-top: 40px;
  display: flex;
  justify-content: end;
  align-items: center;

  @media screen and (max-width: ${theme.deviceSize.tablet}) {
    margin-top: 0;
  }

  @media screen and (max-width: ${theme.deviceSize.mobile}) {
    justify-content: center;
  }
`;

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  svg {
    position: absolute;
    fill: ${theme.palette.gray100};
    cursor: pointer;
    ${({ theme }) =>
      theme.animation.fadeIn({
        name: "scaleUp",
        duration: "0.3s",
        transtion: theme.ts.smooth,
        beginAgrs: "scale: 0.7",
        endAgrs: "scale: 1",
      })}
  }
  .close {
    right: 5%;
  }

  .search {
    right: 6%;
  }

  @media screen and (max-width: ${theme.deviceSize.mobile}) {
    width: 100%;
  }
`;
