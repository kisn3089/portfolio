import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    0% {
    transform: rotate(0deg);
    }
  100%{
    transform: rotate(90deg);
  }
`;

export const ImageLayout = styled.section`
  width: 100%;
  height: calc(100vh - 100px);
  padding: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
`;

export const UploadLayout = styled.div`
  position: relative;
  max-width: 800px;
  width: 80%;
  height: 500px;
  transition: ${({ theme }) => `0.4s ${theme.ts.smooth}`};
  /* transition: ${({ theme }) => `0.8s ${theme.ts.smooth}`}; // drag */
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    transition: ${({ theme }) => `0.4s ${theme.ts.smooth}`};
    /* transition: ${({ theme }) =>
      `all 0.8s ${theme.ts.smooth}, border 0.2s`}; // drag */
    width: 100%;
    height: 100%;
    border: ${({ theme }) => `3px dotted ${theme.palette.gray300}`};
    border-radius: 12px;
  }

  /* drag */
  /* &:hover::before {
    width: 240px;
    height: 240px;
    border-radius: 100%;
    border: ${({ theme }) => `5px dotted ${theme.palette.white}`};
    animation: ${rotate} 4s linear infinite;
  }

  &:hover {
    box-shadow: ${({ theme }) => `0 0 16px 5px ${theme.palette.gray200}`};
  } */

  &:hover::before {
    transform: scale(1.1);
    border-color: ${({ theme }) => theme.palette.blue};
  }
  &:hover {
    svg {
      transform: scale(1.2);
    }

    p {
      color: ${({ theme }) => theme.palette.blue};
      transform: translateY(80%);
    }
  }
`;

export const InsideUpload = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 12px;
  will-change: transform;

  svg {
    width: 60px;
    height: 60px;
    transition: ${({ theme }) => `0.4s ${theme.ts.smooth}`};
  }
`;

export const InsideContent = styled.p`
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-family: ${({ theme }) => theme.fontFamily.en};
  transition: ${({ theme }) => `0.6s ${theme.ts.smooth}`};
  will-change: transform;
`;

export const SampleLayout = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 500px;
  display: flex;
  gap: 20px;
  border: ${({ theme }) => `1px solid ${theme.palette.gray}`};
  border-radius: 8px;

  img {
    width: 50%;
    height: auto;
    object-fit: cover;
  }
`;
