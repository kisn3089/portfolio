import { theme } from "@/styles/theme";
import styled from "styled-components";

export const NoDataLayout = styled.h1`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  font-size: ${theme.fontSize.medium};
  z-index: 3;
  ${theme.animation.fadeIn({
    name: "beforeFetch",
    duration: "1s",
    transtion: theme.ts.moreFast,
    opacity: 0,
    delay: "0.4s",
    direction: "forwards",
  })}
`;
