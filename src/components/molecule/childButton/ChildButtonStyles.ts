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
  height: 100%;
  padding: 16px 60px;
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
`;

export const StandText = styled.span`
  position: relative;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-transform: uppercase;
`;
