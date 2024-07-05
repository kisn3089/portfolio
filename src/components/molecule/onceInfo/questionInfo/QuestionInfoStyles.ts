import styled from "styled-components";

export const QuestionLayout = styled.div<{ $top?: string; $left?: string }>`
  position: absolute;
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  opacity: 0;
  ${({ theme }) =>
    theme.animation.fadeIn({
      name: "question",
      duration: "0.6s",
      transtion: theme.ts.moreFast,
      opacity: 0,
      beginTransform: "translateY(20%)",
      direction: "forwards",
    })};
  svg {
    width: 32px;
    height: 32px;
    stroke: ${({ theme }) => theme.palette.gray100};
    cursor: pointer;
  }
`;
