import { createGlobalStyle } from "styled-components";
import backgroundImage from './tlo2.jpg';

const GlobalStyle = createGlobalStyle`

  html {
    box-sizing: border-box;
  }
  *, *::before, *::after {
    box-sizing: inherit;
  }


  body {
    font-family: "Lato", sans-serif;
    line-height: 1.25;
    background-image: url(${backgroundImage});
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin: 0; 
    padding: 0; 
  }
`;

export default GlobalStyle;
