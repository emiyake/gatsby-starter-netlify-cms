import styled, { keyframes } from "styled-components";
import { FadeDirection, FadeTop } from "./animation.components";
import { Color, Radius, Spacing } from "./constants";

export const ImageBoxStyled = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
`;

interface ImageProps {
  ImageUrl?: string;
  solidBackground?: boolean;
  backImageUrl?: string;
  frontImageUrl?: string;
  alignFrontRight?: boolean;
}

export const FrontImageStyled = styled.div<ImageProps>`
  position: relative;
  width: 80%;
  height: 100%;
  
  &::before {
    content: " ";
    position: absolute;
    z-index: -1;
    left: -${Spacing.XLarge};
    top: -${Spacing.XLarge};
    width: 100%;
    height: 100%;
    background-color: ${Color.Primary};
  }
`;

export const BackImageStyled = styled.div<ImageProps>`
  position: relative;
  vertical-align: bottom;
  right: 0;
  width: 50%;
  height: 0;
  padding-bottom: 70%;
  background: transparent url(${(props) => props.backImageUrl});
  background-size: cover;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.05);

`;
