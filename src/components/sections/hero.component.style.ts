import styled from "styled-components";
import { Color } from "../constants";
import homeBackground from "../../img/img-home-background.png";
import { FontFamily, FontSize, FontWeight, LineHeight } from "../constants"

export const HeroStyled = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 5%;
  background: ${Color.White} url(${homeBackground}) center center no-repeat;
  background-size: cover;
`;

export const HeroContentWrapperStyled = styled.div`
  width: 60%;
`;


export const DisplayStyled = styled.h1`
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.XLarge};
  line-height: ${LineHeight.XLarge};
  font-weight: ${FontWeight.Medium};
  letter-spacing: 1.2px;
  color: ${Color.Secondary};
`

export const StrongWordBoxStyled = styled.div`
  min-height: 8rem;
  width: 100%;
`



