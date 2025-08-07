import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700&family=Exo+2:wght@300;400;600&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #0a0f1e;
    color: #e0e0ff;
    font-family: 'Exo 2', sans-serif;
    overflow-x: hidden;
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Orbitron', sans-serif;
    font-weight: 600;
  }

  button {
    cursor: pointer;
    outline: none;
    border: none;
    font-family: 'Exo 2', sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;