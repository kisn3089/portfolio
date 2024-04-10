import { theme } from "@/styles/theme";
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
    fill: ${theme.palette.red};
    stroke: ${theme.palette.red};
  }
`;

export const ReadyInfo = styled.span`
  color: ${theme.palette.white};
  font-size: ${theme.fontSize.small};
  font-family: ${theme.fontFamily.ko};
`;
