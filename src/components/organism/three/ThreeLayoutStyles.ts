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
  width: 100%;
  height: 100%;
  padding: 30px 0;

  @media screen and (max-width: ${theme.deviceSize.desktop}) {
    padding: 0;
  }
`;

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
  gap: 0 2%;
`;

export const ActionButtonItems = styled.button`
  height: 100%;
  border-radius: 8px;
  padding: 0 20px;
  font-size: ${({ theme }) => theme.fontSize.mini};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  background-color: ${({ theme }) => theme.palette.white};
  color: ${({ theme }) => theme.palette.black};
`;
