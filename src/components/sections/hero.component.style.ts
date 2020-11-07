import styled from "styled-components";
import { Color, Spacing } from "../constants";
import homeBackground from "../../img/img-home-background.png";
import { FontFamily, FontSize, FontWeight, LineHeight } from "../constants"

export const HeroStyled = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: ${Spacing.XXLarge};
  background: ${Color.White} url(${homeBackground}) center center no-repeat;
  background-size: cover;
`;

export const HeroContentWrapperStyled = styled.div`
  width: 50%;

`;

export const HeroTextStyled = styled.h1`
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.XLarge};
  line-height: ${LineHeight.XLarge};
  font-weight: ${FontWeight.Medium};
  letter-spacing: 1.2px;
  color: ${Color.Secondary};
`