import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    font-family: "Nunito Sans";
    background: ${({ theme }) => theme.color.primary};
    transition: 0.3s;
    overflow-y: scroll;
  }
`;
