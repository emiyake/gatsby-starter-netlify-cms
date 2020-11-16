import { createGlobalStyle } from "styled-components";
import { Breakpoint, Color } from "./constants";

export const GlobalStyle = createGlobalStyle`
    * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    }

    body{ 
      background-color: ${Color.Background};
    }

@media (min-width: 0px){
  html{
    font-size: 14px;
  }
}

@media (min-width: ${Breakpoint.Desktop}){
  html{
    font-size: 18px;
  }
}
`;
