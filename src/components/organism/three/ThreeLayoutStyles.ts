import { theme } from "@/styles/theme";
import styled from "styled-components";

export const ThreeLayout = styled.section`
  width: 100%;
  height: 100%;
  padding: 60px 60px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media screen and (max-width: ${theme.deviceSize.tablet}) {
    padding: 40px;
  }
`;

export const SphereLayout = styled.div`
  position: relative;
  width: 100%;
  height: 700px;

  @media screen and (max-width: ${theme.deviceSize.mobile}) {
    height: 500px;
  }
`;

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

export const ModelLoadContainer = styled.span<{ $bgColor: string }>`
  font-size: 56px;
  letter-spacing: 1.2px;
  color: ${({ $bgColor }) => $bgColor};
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
