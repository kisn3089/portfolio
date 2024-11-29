import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
        font-family: "Nunito";
    }

    html {
      overflow-x: hidden;
      scrollbar-width: none; /* Firefox */
        -ms-overflow-style: none;
    }

    body {
        padding: 0;
        margin: 0;
        background-color: ${({ theme }) => theme.palette.darkBlack};
        color: ${({ theme }) => theme.palette.white};
        vertical-align: bottom;
        overflow-x: hidden;
        scrollbar-width: none; /* Firefox */
        -ms-overflow-style: none;

        button {
          border: none;
          cursor: pointer;
          text-transform: uppercase;
          user-select: none;

          &:disabled {
            cursor: not-allowed;
          }
        }

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
          transition: 0.5s cubic-bezier(.58,.34,.19,.86) 0.4s;
        }
      
        .fade-exit {
          width: 100%;
          position: absolute;
          opacity: 1;
          transform: translateY(0);
        }
      
        .fade-exit-active {
          opacity: 0;
          transform: translateY(5%);
          transition: 0.2s cubic-bezier(.63,.33,.17,.91);
        }
    }
`;
