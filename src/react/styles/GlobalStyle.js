import { createGlobalStyle } from "styled-components";
import Fonts from "./fonts";

const GlobalStyle = createGlobalStyle`
  ${Fonts}

  *{
    box-sizing : border-box;
    margin: 0;
    padding: 0;
  }
  /* h1, h2, h3 {
    font-family:'extrabold', sans-serif;
  }
  div {
    font-family:'bold', sans-serif;
  }
  button {
    font-family:'bold', sans-serif;
  }*/
  p {
    font-family:'regular', sans-serif;
    font-size: 14px;
  } 

  
.fade-enter {
  opacity: 0.2;
  transition: opacity 0.3s ease-in;
}

.fade-enter-active {
  opacity: 1;
}

`;

export default GlobalStyle;
