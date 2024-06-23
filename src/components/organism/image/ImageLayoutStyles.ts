import styled from "styled-components";

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
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    transition: ${({ theme }) => `0.4s ${theme.ts.smooth}`};
    width: 100%;
    height: 100%;
    border: ${({ theme }) => `3px dotted ${theme.palette.white}`};
    border-radius: 12px;
  }

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
  /* color: ${({ theme }) => theme.palette.blue}; */
  transition: ${({ theme }) => `0.6s ${theme.ts.smooth}`};
  will-change: transform;
`;
