import { theme } from "@/styles/theme";
import styled from "styled-components";

export const StyleInput = styled.input<{ $width?: string; $height?: string }>`
  width: ${({ $width }) => $width || "220px"};
  height: ${({ $height }) => $height || "50px"};
  border: 1px solid ${theme.palette.gray50};
  border-radius: 8px;
  background-color: transparent;
  color: ${theme.palette.gray100};
  outline: none;
  padding: 0 16px;
  font-size: ${theme.fontSize.mini};
  font-weight: ${theme.fontWeight.bold};
  letter-spacing: 0.5px;
  transition: ${`0.2s ${theme.ts.moreFast}`};

  &:focus {
    border: ${`1px solid ${theme.palette.blue100}`};
  }

  &::placeholder {
    font-size: ${theme.fontSize.extraMini};
    font-family: ${theme.fontFamily.ko};
    padding: 0 6px;
  }

  @media screen and (max-width: ${theme.deviceSize.mobile}) {
    width: 100%;
  }
`;
