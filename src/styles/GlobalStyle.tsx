import { createGlobalStyle } from "styled-components";
import enSemiBold from "../assets/fonts/en/Nunito-SemiBold.ttf";
import enRegular from "../assets/fonts/en/Nunito-Regular.ttf";
import enBold from "../assets/fonts/en/Nunito-Bold.ttf";
import koRegular from "../assets/fonts/ko/NanumSquareRoundR.ttf";
import koBold from "../assets/fonts/ko/NanumSquareRoundB.ttf";
import Loading from "../assets/fonts/en/Agbalumo-Regular.ttf";

export const GlobalStyle = createGlobalStyle`
    @font-face {
      font-family: "Agbalumo";
      src: local("Agbalumo-Regular"), url(${Loading}), format("ttf");
      font-weight: 700;
      font-display: swap;
    }
    @font-face {
      font-family: "Nunito";
      src: local("Nunito-SemiBold"), url(${enSemiBold}), format("ttf");
      font-weight: 700;
      font-display: swap;
    }
    @font-face {
      font-family: "Nunito";
      src: local("Nunito-Regular"), url(${enRegular}), format("ttf");
      font-weight: 400;
      font-display: swap;
    }
    @font-face {
      font-family: "Nunito";
      src: local("Nunito-Bold"), url(${enBold}), format("ttf");
      font-weight: 900;
      font-display: swap;
    }
    @font-face {
      font-family: "NanumSquareRound";
      src: local("NanumSquareRound-Regular"), url(${koRegular}), format("ttf");
      font-weight: 400;
      font-display: swap;
    }
    @font-face {
      font-family: "NanumSquareRound";
      src: local("NanumSquareRound-Bold"), url(${koBold}), format("ttf");
      font-weight: 700;
      font-display: swap;
    }

    * {
        box-sizing: border-box;
        font-family: "Nunito";
    }

    body {
        padding: 0;
        margin: 0;
        background-color: ${({ theme }) => theme.palette.black};
        color: ${({ theme }) => theme.palette.white};
        vertical-align: bottom;
        overflow-x: hidden;

        a {
          text-decoration: none;
        }

        .fade-enter {
          width: 100%;
          position: absolute;
          opacity: 0;
          transform: translateY(20%);
        }
      
        .fade-enter-active {
          opacity: 1;
          transform: translateY(0);
          transition: 0.6s cubic-bezier(.58,.34,.19,.86) 0.4s;
        }
      
        .fade-exit {
          width: 100%;
          position: absolute;
          opacity: 1;
          transform: translateY(0);
        }
      
        .fade-exit-active {
          opacity: 0;
          transform: translateY(20%);
          transition: 0.4s cubic-bezier(.63,.33,.17,.91);
        }
    }
`;
