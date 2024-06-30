import { theme } from "@/styles/theme";
import styled from "styled-components";

export const ImageWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
`;

export const EditingImage = styled.img`
  max-width: 1500px;
  height: 500px;
  object-fit: contain;
  border-radius: 24px;
  border: ${({ theme }) => `1px solid ${theme.palette.gray}`};
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
