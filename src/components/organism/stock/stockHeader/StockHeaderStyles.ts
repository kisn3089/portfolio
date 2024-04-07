import styled from "styled-components";

export const StockSection = styled.section`
  width: 100%;
  padding: 0 60px;
`;

export const StockHeaderStyle = styled.header`
  width: 100%;
  height: 80px;
  margin-top: 40px;
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  svg {
    position: absolute;
    fill: ${({ theme }) => theme.palette.gray100};
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
`;
