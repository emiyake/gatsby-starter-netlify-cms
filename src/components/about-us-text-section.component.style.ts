import styled from "styled-components";
import { Color, Radius, Spacing } from "./constants";

export const TextBoxStyled = styled.div`
  position: relative;
  text-align: center;
  padding-top: 10%;
  z-index: 0;
`;

export const AboutUsTitleStyled = styled.div`
  position: relative;
  text-align: center;
  z-index: 0;
  &::before {
    z-index: -1;
    content: "";
    position: absolute;
    left: 0;
    bottom: 0px;
    width: 20%;
    padding-bottom: 20%;
    background-color: ${Color.Primary};
  }
`;

export const LogoBoxStyled = styled.div`
  border-radius: ${Radius.Large};
`

