import { theme } from "@/styles/theme";
import styled from "styled-components";

export const ModalLayout = styled.div<{ $showModal: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 300px;
  height: 100%;
  border-radius: 8px;
  opacity: 0;
  pointer-events: ${({ $showModal }) => !$showModal && "none"};
  background-color: ${theme.palette.black};
  will-change: transform opacity;

  ${({ theme, $showModal }) =>
    theme.animation.fadeIn({
      name: `${$showModal ? "showLeftModal" : "hideLeftModal"}`,
      duration: `${$showModal ? "0.8s" : "0.6s"}`,
      transtion: theme.ts.moreFast,
      direction: "forwards",
      opacity: $showModal ? 0 : 1,
      beginTransform: `${
        $showModal ? "translate3d(-120%, 0, 0)" : "translate3d(0, 0, 0)"
      }`,
      endTransform: `${
        $showModal ? "translate3d(0, 0, 0)" : "translate3d(-120%, 0, 0)"
      }`,
    })}

  @media screen and (max-width: ${theme.deviceSize.desktop}) {
    display: none;
  }

  @media screen and (max-width: ${theme.deviceSize.tablet}) {
    display: block;
  }

  @media screen and (max-width: ${theme.deviceSize.mobile}) {
    width: 100%;
    ${({ theme, $showModal }) =>
      theme.animation.fadeIn({
        name: `${$showModal ? "showUpModal" : "hideDownModal"}`,
        duration: `${$showModal ? "0.8s" : "0.6s"}`,
        transtion: theme.ts.moreFast,
        direction: "forwards",
        beginTransform: `${
          $showModal ? "translate3d(0, 100%, 0)" : "translate3d(0, 0, 0)"
        }`,
        endTransform: `${
          $showModal ? "translate3d(0, 0, 0)" : "translate3d(0, 100%, 0)"
        }`,
        opacity: $showModal ? 0 : 1,
      })};
  }
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${theme.palette.black};
  border-radius: 0 0 8px 8px;
  outline: 1px solid ${theme.palette.gray50};
`;

export const ModalHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 14px;
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
    fill: ${theme.palette.black};
    background-color: ${theme.palette.white};
    border-radius: 100%;
  }
`;

export const ChartContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  @media screen and (max-width: ${theme.deviceSize.desktop}) {
    display: none;
  }

  @media screen and (max-width: ${theme.deviceSize.mobile}) {
    display: block;
  }
`;
