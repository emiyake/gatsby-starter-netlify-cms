import styled from "styled-components";
import { Color } from "../constants";
import homeBackground from "../../img/img-home-background.png";
import { Grid } from "react-flexbox-grid";

export const HeroStyled = styled.div`
  width: 100vw;
  height: 90vh;
  background: ${Color.White} url(${homeBackground}) center center no-repeat;
  background-size: cover;
`;

export const HeroGridStyled = styled(Grid)`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const StrongWordBoxStyled = styled.div`
  min-height: 8rem;
  width: 100%;
`


