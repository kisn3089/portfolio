import styled, { css } from "styled-components";

export const ArrowRight = styled.div`
  position: absolute;
  top: 50%;
  left: 100%;
  color: ${({ theme }) => theme.palette.white};
  transform: translate3d(0, -50%, 0);
  transition: 0.4s cubic-bezier(0.63, 0.33, 0.17, 0.91);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px 0;
`;

export const Dot = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.palette.white};
`;

export const Content = styled.div<{ $isActive: boolean }>`
  position: relative;
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.weight.bold};
  color: ${({ theme }) => theme.palette.white};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  span {
    transition: 0.3s cubic-bezier(0.4, 0, 0.1, 1);
  }
  :nth-child(1) {
    position: ${({ $isActive }) => ($isActive ? "absolute" : "static")};
    transform: ${({ $isActive }) =>
      $isActive ? "translate3d(0, 100%, 0)" : "translate3d(0, 0, 0)"};
    pointer-events: ${({ $isActive }) => ($isActive ? "none" : "auto")};
  }
  :nth-child(2) {
    position: ${({ $isActive }) => ($isActive ? "static" : "absolute")};
    transform: ${({ $isActive }) =>
      $isActive ? "translate3d(0, 0, 0)" : "translate3d(0, -100%, 0)"};
    pointer-events: ${({ $isActive }) => ($isActive ? "auto" : "none")};
  }
`;

export const ActiveButtonContainer = styled.button<{
  $width?: string;
  $isActive: boolean;
}>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 52px;
  border-radius: 12px;
  outline: none;
  border: none;
  cursor: pointer;
  overflow: hidden;
  transition: 0.4s cubic-bezier(0.63, 0.33, 0.17, 0.91);
  width: ${({ $width }) => $width || "160px"};
  background-color: ${({ theme, $isActive }) =>
    $isActive ? theme.palette.white : theme.palette.gray};
  padding-right: ${({ $isActive }) => ($isActive ? "30px" : "0px")};

  ${({ $isActive }) => {
    if ($isActive) {
      return css`
        ${Content} {
          color: ${({ theme }) => theme.palette.black};
        }
        ${Dot} {
          background-color: ${({ theme }) => theme.palette.black};
        }

        ${ArrowRight} {
          left: 74%;
        }
      `;
    }
  }}

  &:hover {
    background-color: ${({ theme }) => theme.palette.white};
    padding-right: 30px;

    ${Content} {
      color: ${({ theme }) => theme.palette.black};
    }

    ${Dot} {
      background-color: ${({ theme }) => theme.palette.black};
    }

    ${ArrowRight} {
      left: 80%;
    }
  }
`;
