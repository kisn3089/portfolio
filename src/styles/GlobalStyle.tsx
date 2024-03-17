import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        padding: 0;
        margin: 0;
        background-color: #222;
        color: #fff;

        .fade-enter {
          position: absolute;
          opacity: 0;
          transform: translateY(20%);
        }
      
        .fade-enter-active {
          opacity: 1;
          transform: translateY(0);
          transition: 0.8s cubic-bezier(.58,.34,.19,.86) 0.6s;
        }
      
        .fade-exit {
          position: absolute;
          opacity: 1;
          transform: translateY(0);
        }
      
        .fade-exit-active {
          opacity: 0;
          transform: translateY(50%);
          transition: 0.6s cubic-bezier(.63,.33,.17,.91);
        }
    }
`;

export const Imgbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;

  img {
    object-fit: contain;
  }
`;
