import styled from "styled-components";

export const CanvasCoreContainer = styled.div<{ $hasRadius?: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;

  canvas {
    border-radius: ${({ $hasRadius }) => ($hasRadius ? "20px" : "0")};
    ${({ theme }) =>
      theme.animation.fadeIn({
        name: "fadeIn_canvas",
        duration: "5s",
        transtion: theme.ts.smooth,
        opacity: 0,
        direction: "forwards",
      })}
  }
`;
