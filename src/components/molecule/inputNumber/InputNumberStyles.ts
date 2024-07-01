import styled from "styled-components";

export const InputLayout = styled.div`
  position: relative;
  width: 100px;
  height: 55px;
  display: flex;
  align-items: center;
  border: ${({ theme }) => `1px solid ${theme.palette.gray}`};
  border-radius: 8px;
  padding: 0px 12px;
`;

export const RGBInput = styled.input`
  width: 100%;
  outline: none;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.palette.white};
  font-size: ${({ theme }) => theme.fontSize.medium};

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const ArrowContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 44px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: transparent;
`;

export const Center = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  user-select: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.palette.gray};
  }

  svg {
    fill: ${({ theme }) => theme.palette.white};
    width: 26px;
    height: 26px;
  }

  .up {
    transform: rotate(90deg);
  }

  .down {
    transform: rotate(270deg);
  }
`;

export const OnceInfoInput = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: ${({ theme }) => `1px solid ${theme.palette.blue100}`};
  border-radius: 8px;
`;

export const Line = styled.div`
  position: absolute;
  bottom: -50%;
  left: 50%;
  width: 2px;
  height: calc(50% - 1px);
  background-color: ${({ theme }) => theme.palette.blue100};
`;

export const InfoLayout = styled.div`
  position: absolute;
  left: 50%;
  transform: translate3d(-50%, 55%, 0);
  width: 300px;
  height: 140px;
  border: ${({ theme }) => `1px solid ${theme.palette.blue100}`};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 8;
  backdrop-filter: blur(10px);
  box-shadow: ${({ theme }) => `0 0 10px 2px ${theme.palette.blue}`};
`;

export const InfoContent = styled.span`
  font-size: ${({ theme }) => theme.fontSize.mini};
  font-family: ${({ theme }) => theme.fontFamily.ko};
`;

// export const;
