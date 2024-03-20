import { FadeUp } from "@/styles/Animation";
import styled, { keyframes } from "styled-components";

const gradientInfinty = keyframes`
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
`;

export const LoaderContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${FadeUp} 1s cubic-bezier(0.63, 0.33, 0.17, 0.91);
`;

export const Loader = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 60px;
  white-space: nowrap;
  transition: 0.8s ease-in-out;
  font-size: 60px;
  font-weight: ${({ theme }) => theme.fontWeight.extra};
  font-family: ${({ theme }) => theme.family.loading};
  width: 0;
  /* color 투명하게 하고 background-image로 설정한 색을 text color로 변경하는 핵심 로직 */
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  background-size: 700% auto;
  background-image: linear-gradient(
    to right,
    #d16ba5 20%,
    #9a9ae1 30%,
    #79b3f4 70%,
    #5ffbf1 80%
  );
  animation: ${gradientInfinty} 5s ease-in-out infinite alternate;
  /* --- */
`;

/* loading background layout */
export const LoaderSpace = styled.span`
  position: relative;
  font-size: 60px;
  width: fit-content;
  color: #222;
  white-space: nowrap;
  font-weight: ${({ theme }) => theme.fontWeight.extra};
  font-family: ${({ theme }) => theme.family.loading};
`;
