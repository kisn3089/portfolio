import { theme } from "@/styles/theme";
import styled from "styled-components";

export const ImageWrapper = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
`;

export const EditingImage = styled.img<{ $isLoading: boolean }>`
  max-width: 1500px;
  height: 100%;
  object-fit: contain;
  border-radius: 24px;
  border: ${({ theme }) => `1px solid ${theme.palette.gray}`};
  transform: ${({ $isLoading }) => ($isLoading ? "scale(0.8)" : "scale(1)")};
  transition: ${({ theme }) => `0.4s ${theme.ts.smooth}`};
  filter: ${({ $isLoading }) => ($isLoading ? "blur(3px)" : "none")};
  ${({ theme }) =>
    theme.animation.fadeIn({
      name: "scaleUp",
      duration: "0.6s",
      transtion: theme.ts.moreFast,
      beginTransform: "scale(0.4)",
      endTransform: "scale(1)",
      opacity: 0,
    })}

  @media screen and (max-width: ${theme.deviceSize.tablet}) {
    width: 100%;
    object-fit: cover;
  }
`;
