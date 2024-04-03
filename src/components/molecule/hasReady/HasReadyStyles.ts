import styled from "styled-components";

export const HasReadyContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 24px;

  svg {
    width: 40px;
    height: 60px;
    fill: ${({ theme }) => theme.palette.red};
    stroke: ${({ theme }) => theme.palette.red};
  }
`;

export const ReadyInfo = styled.span`
  color: ${({ theme }) => theme.palette.white};
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-family: ${({ theme }) => theme.fontFamily.ko};
`;
