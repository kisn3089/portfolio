import styled from "styled-components";

export const ChangeActionLayout = styled.div`
  position: absolute;
  bottom: 2%;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 0 2%;
`;

export const ActionButtonItems = styled.button`
  height: 100%;
  border-radius: 8px;
  padding: 0 20px;
  font-size: ${({ theme }) => theme.fontSize.mini};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  background-color: ${({ theme }) => theme.palette.white};
  color: ${({ theme }) => theme.palette.black};
  transition: ${({ theme }) => `0.4s ${theme.ts.smooth}`};

  &:disabled {
    background-color: ${({ theme }) => theme.palette.disabledBackground};
    color: ${({ theme }) => theme.palette.disabledColor};
  }
`;
