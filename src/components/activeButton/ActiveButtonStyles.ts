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

export const Content = styled.div`
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.weight.bold};
  color: ${({ theme }) => theme.palette.white};
`;

export const ActiveButtonContainer = styled.button<{
  $width?: string;
  $isActive: boolean;
}>`
  position: relative;
  width: ${({ $width }) => $width || "160px"};
  height: 52px;
  border-radius: 12px;
  background-color: ${({ theme, $isActive }) =>
    $isActive ? theme.palette.white : theme.palette.gray};
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.4s cubic-bezier(0.63, 0.33, 0.17, 0.91);
  overflow: hidden;
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
