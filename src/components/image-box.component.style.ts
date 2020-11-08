import styled from "styled-components";
import { Color, Spacing } from "./constants";


export const ImageBoxStyled = styled.div`
  position: relative;
  z-index: 0;
  width: 100%;
  height: 0px;
  padding-bottom: 150%;
`;  

interface ImageProps {
  ImageUrl?: string;
  solidBackground?: boolean;
  backImageUrl?: string;
  frontImageUrl?: string;
  alignFrontRight?: boolean;
  
}

export const FrontImageStyled = styled.div<ImageProps>`
  position: absolute;
  ${props => props.alignFrontRight ? "right: 0" : "left: 0 " };
  width: 80%;
  height: 0;
  padding-bottom: 120%;
  background: ${Color.LightGray} url(${ props => props.frontImageUrl}) no-repeat center center;
  background-size: cover;
  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    background-color: ${props => props.solidBackground ? Color.Primary : "transparent"};
    left: -${Spacing.Small};
    top: -${Spacing.Small};
    width: 100%;
    height: 100%;
  }
`;

export const BackImageStyled = styled.div<ImageProps>`
  position: absolute;
  ${props => props.alignFrontRight ? "left: 0" : "right: 0" };
  bottom: 0;
  width: 50%;
  height: 0;
  padding-bottom: 50%;
  background: ${Color.Gray} url(${props => props.backImageUrl});
  background-size: cover;
`;

interface ImageBoxSizingProps {
  width?: string;
}

export const ImageBoxSizingStyled = styled.div<ImageBoxSizingProps>`
  width: ${props => props.width};
` 