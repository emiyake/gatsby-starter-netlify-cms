import styled from "styled-components";
import { Color } from "../constants";
import  homeBackground  from "../../img/img-home-background.png";


export const HeroStyled = styled.div`
    width: 100vw;
    height: 100vh;
    background: ${Color.White} url(${homeBackground}) center center no-repeat;
    background-size: cover;
`

export const BoxStyled = styled.div`
    width: 10vw;
    height: 10vh;
    background-size: cover;
`