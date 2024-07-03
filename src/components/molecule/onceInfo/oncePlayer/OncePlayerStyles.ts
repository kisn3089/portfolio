import styled from "styled-components";

export const OnceInfoLayout = styled.div`
  position: absolute;
  top: 28%;
  left: 28%;
  width: 380px;
  height: 220px;
  border: ${({ theme }) => `1px solid ${theme.palette.blue100}`};
  border-radius: 8px;
  box-shadow: ${({ theme }) => `0 0 10px 2px ${theme.palette.blue}`};
  backdrop-filter: brightness(30%) blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 14px;
  opacity: 0;
  ${({ theme }) =>
    theme.animation.fadeIn({
      name: "once_shortcut",
      duration: "1.2s",
      transtion: theme.ts.moreFast,
      opacity: 0,
      beginTransform: "translateY(20%)",
      direction: "forwards",
    })};
`;

export const OnceContent = styled.span`
  display: flex;
  align-items: center;
  gap: 0 8px;
  font-size: ${({ theme }) => theme.fontSize.mini};
  &.ko {
    font-family: ${({ theme }) => theme.fontFamily.ko};
  }
`;

export const QuestionLayout = styled.div`
  position: absolute;
  top: -50px;
  left: 0;
  svg {
    width: 32px;
    height: 32px;
    stroke: ${({ theme }) => theme.palette.gray100};
    cursor: pointer;
  }
`;
