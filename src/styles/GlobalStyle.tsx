import { createGlobalStyle } from "styled-components";
import enBold from "../assets/fonts/en/Nunito-SemiBold.ttf";
import enRegular from "../assets/fonts/en/Nunito-Regular.ttf";
import koRegular from "../assets/fonts/ko/NanumSquareRoundR.ttf";
import koBold from "../assets/fonts/ko/NanumSquareRoundB.ttf";

export const GlobalStyle = createGlobalStyle`
    @font-face {
      font-family: "Nunito-Bold";
      src: local("Nunito-Bold"), url(${enBold}), format("ttf");
      font-weight: normal;
    }
    @font-face {
      font-family: "Nunito-Regular";
      src: local("Nunito-Regular"), url(${enRegular}), format("ttf");
      font-weight: normal;
    }
    @font-face {
      font-family: "NanumSquareRound-Regular";
      src: local("NanumSquareRound-Regular"), url(${koRegular}), format("ttf");
      font-weight: normal;
    }
    @font-face {
      font-family: "NanumSquareRound-Bold";
      src: local("NanumSquareRound-Bold"), url(${koBold}), format("ttf");
      font-weight: normal;
    }

    * {
        box-sizing: border-box;
        font-family: "Nunito";
    }

    body {
        padding: 0;
        margin: 0;
        background-color: #111;
        color: #fff;
        vertical-align: bottom;

        a {
          text-decoration: none;
        }

        .fade-enter {
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
          position: absolute;
          opacity: 1;
          transform: translateY(0);
        }
      
        .fade-exit-active {
          opacity: 0;
          transform: translateY(50%);
          transition: 0.4s cubic-bezier(.63,.33,.17,.91);
        }
    }
`;
