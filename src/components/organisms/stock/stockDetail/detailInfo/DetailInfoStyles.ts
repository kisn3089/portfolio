import { theme } from "@/styles/theme";
import styled from "styled-components";

export const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  gap: 10px;
`;

export const BaseInfoLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const AllocationLayout = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.palette.gray};
  border-radius: 8px;
`;

export const Notice = styled.span`
  font-size: ${theme.fontSize.mini};
  font-weight: ${theme.fontWeight.bold};
  padding: 14px 12px;
  text-align: center;

  @media screen and (max-width: ${theme.deviceSize.mobile}) {
    font-size: ${theme.fontSize.mobileSmall};
  }
`;
