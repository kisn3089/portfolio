import { theme } from "@/styles/theme";
import styled from "styled-components";

export const BeforeFetchLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 24px;
  ${theme.animation.fadeIn({
    name: "beforeFetch",
    duration: "1s",
    transtion: theme.ts.moreFast,
    opacity: 0,
  })}

  svg {
    width: 32px;
    height: 32px;
    fill: ${theme.palette.blue};
  }
`;

export const InfoText = styled.span`
  font-size: ${theme.fontSize.small};
  font-family: ${theme.fontFamily.ko};
`;
