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
  top: -220%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  width: 300px;
  height: 180px;
  border: ${({ theme }) => `1px solid ${theme.palette.blue100}`};
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 32px 0 14px 0;
  z-index: 8;
  backdrop-filter: blur(10px);
  box-shadow: ${({ theme }) => `0 0 10px 2px ${theme.palette.blue}`};
`;

export const InfoContent = styled.span`
  font-size: ${({ theme }) => theme.fontSize.mini};
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
