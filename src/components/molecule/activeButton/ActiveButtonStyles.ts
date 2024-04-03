import styled, { css } from "styled-components";

export const ArrowRight = styled.div`
  position: absolute;
  top: 50%;
  left: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px 0;
  color: ${({ theme }) => theme.palette.white};
  transform: translate3d(0, -50%, 0);
  transition: ${({ theme }) => `0.4s ${theme.ts.moreFast}`};
`;

export const Dot = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.palette.white};
`;

export const Content = styled.div<{ $isActive: boolean }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.palette.white};
  span {
    transition: ${({ theme }) => `0.3s ${theme.ts.smooth}`};
    user-select: none;
  }

  /* active일때 position 첫번째 요소 static, 두번째 요소 absolute로 변경 (transform도 같이) */
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
  transition: ${({ theme }) => `0.4s ${theme.ts.moreFast}`};
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
    padding-right: 30px;
    background-color: ${({ theme }) => theme.palette.white};

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
