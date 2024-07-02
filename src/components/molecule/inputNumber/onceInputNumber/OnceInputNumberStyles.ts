import styled from "styled-components";

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
  top: -50%;
  left: 50%;
  width: 2px;
  height: 50%;
  background-color: ${({ theme }) => theme.palette.blue100};
`;

export const InfoLayout = styled.div`
  position: absolute;
  top: -400%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  width: 300px;
  height: 360px;
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

export const ThresholdInfoWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 12px;
`;

export const CenterLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.palette.blue};
`;

export const ShortcutWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 12px;
`;

export const InfoContent = styled.span`
  font-size: ${({ theme }) => theme.fontSize.mini};
  &.ko {
    font-family: ${({ theme }) => theme.fontFamily.ko};
  }
`;

export const ClearButton = styled.button`
  width: 70px;
  height: 34px;
  background-color: ${({ theme }) => theme.palette.white};
  color: ${({ theme }) => theme.palette.black};
  text-transform: uppercase;
  border: none;
  border-radius: 6px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-top: 4px;
  transition: ${({ theme }) => `0.4s ${theme.ts.smooth}`};

  &:hover {
    background-color: ${({ theme }) => theme.palette.blue};
    color: ${({ theme }) => theme.palette.white};
  }
`;
