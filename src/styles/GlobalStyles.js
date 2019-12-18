import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ul, li, h1, h2, h3, p, button { margin: 0; padding: 0; }
  ul { list-style: none; }
  button { background: transparent; border: 0; outline: 0 }
  body {
    height: 100vh;
    margin: 0 auto;
    overscroll-behavior: none;
    width: 100%;
  } 
  
`;

export default GlobalStyles;
