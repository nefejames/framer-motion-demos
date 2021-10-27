import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    font-size: 62.5%;
    color: #23242a;
    font-family: 'Open Sans', sans-serif;
    background: #fff;
    position: relative;

    * {
      font-family: inherit;
    }
  }

  a{
    color: #23242a;
    font-size: 1.2rem;
  }

  p,span{
    font-size: calc(1.2rem + 0.3vw);
    line-height: 1.7;
  }

  a,p,li,span {
    font-weight: 300;
  }

  h1, h2, h3{
    font-weight: 600;
  }
`;

export default GlobalStyles;
