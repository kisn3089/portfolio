import { theme } from "@/styles/theme";
import styled from "styled-components";

export const HvLine = styled.div`
  position: absolute;
  bottom: -10%;
  left: 0%;
  height: 2.4px;
  width: 0;
  background-color: ${({ theme }) => theme.palette.black};
  transition: ${({ theme }) => `0.4s ${theme.ts.moreFast}`};
`;

export const ChildButtonContainer = styled.div<{ $disabled: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  letter-spacing: 1px;
  white-space: nowrap;
  user-select: none;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  height: 52px;
  padding: 0 60px;
  background-color: ${({ theme, $disabled }) =>
    $disabled ? theme.palette.disabledBackground : theme.palette.white};
  color: ${({ theme, $disabled }) =>
    $disabled ? theme.palette.disabledColor : theme.palette.black};
  transition: ${({ theme }) => `0.6s ${theme.ts.moreFast}`};

  &:hover {
    ${HvLine} {
      width: ${({ $disabled }) => !$disabled && "100%"};
    }
  }

  @media screen and (max-width: ${theme.deviceSize.tablet}) {
    padding: 0 40px;
  }

  @media screen and (max-width: ${theme.deviceSize.mobile}) {
    padding: 0 12px;
  }
`;

export const StandText = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0 4px;
  font-size: ${({ theme }) => theme.fontSize.mini};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-transform: uppercase;

  @media screen and (max-width: ${theme.deviceSize.mobile}) {
    font-size: ${({ theme }) => theme.fontSize.extraMini};
  }
`;
