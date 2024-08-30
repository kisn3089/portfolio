import { theme } from "@/styles/theme";
import styled from "styled-components";

export const ColLayout = styled.div`
  width: 100%;
  height: 1000px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  gap: 40px;

  @media screen and (max-width: ${theme.deviceSize.desktop}) {
    flex-direction: column;
    justify-content: center;
    height: 1400px;
  }

  @media screen and (max-width: ${theme.deviceSize.tablet}) {
    flex-direction: column;
    height: 1000px;
  }

  @media screen and (max-width: ${theme.deviceSize.mobile}) {
    flex-direction: column;
    height: 800px;
  }
`;

export const AppleLayout = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 30px 0;

  @media screen and (max-width: ${theme.deviceSize.desktop}) {
    padding: 0;
  }
`;

export const AppleColorWrapper = styled.button<{ $canvasColor: string }>`
  position: absolute;
  bottom: 4%;
  left: 50%;
  padding: 10px 32px;
  border-radius: 8px;
  transform: translate3d(-50%, -50%, 0);
  font-size: ${({ theme }) => theme.fontSize.extraMini};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  background-color: ${({ theme, $canvasColor }) =>
    $canvasColor === theme.palette.black
      ? theme.palette.white
      : theme.palette.gray};
  color: ${({ theme, $canvasColor }) =>
    $canvasColor === theme.palette.black
      ? theme.palette.black
      : theme.palette.white};
  transition: ${({ theme }) => `0.4s ${theme.ts.smooth}`};

  @media screen and (max-width: ${theme.deviceSize.desktop}) {
    bottom: -2%;
  }
`;
