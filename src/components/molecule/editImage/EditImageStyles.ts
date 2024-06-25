import styled from "styled-components";

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
`;

export const EditingImage = styled.img`
  max-width: 900px;
  height: 500px;
  max-height: 500px;
  object-fit: cover;
  border-radius: 24px;
  border: ${({ theme }) => `1px solid ${theme.palette.gray}`};
  ${({ theme }) =>
    theme.animation.fadeIn({
      name: "scaleUp",
      duration: "0.8s",
      transtion: theme.ts.smooth,
      beginTransform: "scale(0.7)",
      endTransform: "scale(1)",
    })}
`;
