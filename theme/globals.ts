import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle<any>`
  html,
  body,
  #__next {
    height: 100%;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

  input, textarea {
    color: inherit;
  }

  #root {
    height: 100%;
  }
`;
