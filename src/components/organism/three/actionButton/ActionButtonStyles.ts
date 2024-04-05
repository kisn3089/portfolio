import { theme } from "@/styles/theme";
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
  gap: 1%;

  @media screen and (max-width: ${theme.deviceSize.desktop}) {
    display: grid;
    grid-template-columns: repeat(4, 110px);
    height: 90px;
  }
`;

export const ActionButtonItems = styled.button`
  height: 40px;
  border-radius: 8px;
  padding: 0 20px;
  font-size: ${({ theme }) => theme.fontSize.mini};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  background-color: ${({ theme }) => theme.palette.white};
  color: ${({ theme }) => theme.palette.black};
  transition: ${({ theme }) => `0.4s ${theme.ts.smooth}`};
  opacity: 0;
  ${({ theme }) =>
    theme.animation.fadeIn({
      name: "actionButtons",
      duration: "1s",
      transtion: theme.ts.smooth,
      beginTransform: "translate3d(0, 70%, 0)",
      endTransform: "translate3d(0, 0, 0)",
      opacity: 0,
      direction: "forwards",
    })}

  &:disabled {
    background-color: ${({ theme }) => theme.palette.disabledBackground};
    color: ${({ theme }) => theme.palette.disabledColor};
  }
`;
