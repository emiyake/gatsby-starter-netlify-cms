import styled from "styled-components";
import { Color } from "../constants";
import homeBackground from "../../img/img-home-background.png";

export const HeroStyled = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 90vh;
  padding: 5%;
  background: ${Color.White} url(${homeBackground}) center center no-repeat;
  background-size: cover;
`;

export const StrongWordBoxStyled = styled.div`
  min-height: 8rem;
  width: 100%;
`


