import styled from "styled-components";

export const ArrowRight = styled.div`
  position: absolute;
  top: 50%;
  left: 101%;
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

export const Content = styled.div`
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

  &.isActive {
    span {
      color: ${({ theme }) => theme.palette.black};
    }

    .default {
      position: absolute;
      transform: translate3d(0, 100%, 0);
      pointer-events: none;
    }
    .active {
      position: static;
      transform: translate3d(0, 0, 0);
      pointer-events: default;
    }
  }

  .active {
    position: absolute;
    transform: translate3d(0, -100%, 0);
    pointer-events: none;
  }
`;

export const ActiveButtonContainer = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 52px;
  border-radius: 12px;
  border: none;
  overflow: hidden;
  transition: ${({ theme }) => `0.4s ${theme.ts.moreFast}`};
  width: 160px;
  background-color: ${({ theme }) => theme.palette.gray};

  &.width {
    width: 90%;
  }

  &.isActive {
    background-color: ${({ theme }) => theme.palette.white};
    padding: 0 30px 0 0;

    ${Dot} {
      background-color: ${({ theme }) => theme.palette.black};
    }

    ${ArrowRight} {
      left: 74%;
    }
  }

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
