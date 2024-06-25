import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    0% {
      
    transform: rotate(0deg);
    }
  100%{
    transform: rotate(90deg);
  }
`;

export const UploadLayout = styled.div`
  width: 100%;
  max-width: 800px;
  height: 260px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const BorderCenter = styled.div`
  position: absolute;
  width: 260px;
  height: 260px;
  border-radius: 100%;
  transition: ${({ theme }) => `0.4s ${theme.ts.smooth}`};
  border: ${({ theme }) => `5px dotted ${theme.palette.white}`};
  animation: ${rotate} 4s linear infinite;
  opacity: 0;
`;

export const UploadContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: ${({ theme }) => `0.4s ${theme.ts.smooth}`};
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    display: none;
  }

  &:hover {
    box-shadow: ${({ theme }) => `0 0 16px 5px ${theme.palette.gray200}`};
    ${BorderCenter} {
      opacity: 1;
      width: 240px;
      height: 240px;
    }
  }

  &::before {
    content: "";
    position: absolute;
    transition: ${({ theme }) => `0.4s ${theme.ts.smooth}`};
    width: 100%;
    height: 100%;
    border: ${({ theme }) => `3px dotted ${theme.palette.gray300}`};
    border-radius: 12px;
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

export const LabelUpload = styled.label`
  width: 100%;
  height: 100%;
  position: absolute;
  cursor: pointer;
  z-index: 29;
`;
