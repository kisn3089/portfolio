import { theme } from "@/styles/theme";
import styled from "styled-components";

export const BeforeFetchLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${theme.animation.fadeIn({
    name: "beforeFetch",
    duration: "1s",
    transtion: theme.ts.moreFast,
    opacity: 0,
  })}
`;
