import styled from "styled-components";

export const LoadingContainer = styled.div<{ $isLoading: boolean }>`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  pointer-events: ${({ $isLoading }) => !$isLoading && "none"};
  will-change: transform opacity;
  ${({ theme, $isLoading }) =>
    theme.animation.fadeIn({
      name: $isLoading ? "show" : "hide",
      beginTransform: $isLoading ? "translate3d(0, 10%, 0)" : undefined,
      endTransform: $isLoading ? undefined : "translate3d(0, 6%, 0)",
      opacity: $isLoading ? 0 : 1,
      duration: $isLoading ? "0.6s" : "0.4s",
      transtion: theme.ts.moreFast,
      direction: "forwards",
    })};
  svg {
    fill: ${({ theme }) => theme.palette.white};
    width: 48px;
    height: 48px;
  }
`;
