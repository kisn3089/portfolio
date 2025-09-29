import { theme } from "@/styles/theme";
import styled from "styled-components";

export const DashboardLayout = styled.div`
  max-width: 800px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: ${theme.deviceSize.mobile}) {
    gap: 0 8px;
  }

  svg {
    width: 28px;
    height: 28px;
  }
`;

export const Row = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 0 12px;

  @media screen and (max-width: ${theme.deviceSize.mobile}) {
    gap: 0 8px;
  }
`;

export const WrapperButton = styled.button`
  border: none;
  padding: 0;
  background-color: transparent;
`;

export const Threshold = styled.label`
  font-size: ${({ theme }) => theme.fontSize.small};
  cursor: pointer;

  @media screen and (max-width: ${theme.deviceSize.tablet}) {
    font-size: ${({ theme }) => theme.fontSize.mini};
  }
`;
