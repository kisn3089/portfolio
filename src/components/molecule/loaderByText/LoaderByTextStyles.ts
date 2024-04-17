import { theme } from "@/styles/theme";
import styled from "styled-components";

export const LoaderContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) =>
    theme.animation.fadeIn({
      name: "loading",
      duration: "1s",
      transtion: theme.ts.moreFast,
      beginTransform: "translate3d(0, -20%, 0)",
      opacity: 0,
    })}
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
  ${({ theme }) =>
    theme.animation.fadeIn({
      name: "gradient",
      duration: "5s",
      transtion: "linear",
      beginAgrs: "background-position: 0% 50%",
      endAgrs: "background-position: 100% 50%",
      count: "infinite",
      direction: "alternate",
    })} /* --- */

    @media screen and (max-width: ${theme.deviceSize.tablet}) {
    font-size: 40px;
  }

  @media screen and (max-width: ${theme.deviceSize.mobile}) {
    font-size: 30px;
  }
`;

/* loading background layout */
export const LoaderSpace = styled.span`
  position: relative;
  font-size: 60px;
  width: fit-content;
  color: #222;
  white-space: nowrap;
  font-weight: ${({ theme }) => theme.fontWeight.extra};

  @media screen and (max-width: ${theme.deviceSize.tablet}) {
    font-size: 40px;
  }

  @media screen and (max-width: ${theme.deviceSize.mobile}) {
    font-size: 30px;
  }
`;
