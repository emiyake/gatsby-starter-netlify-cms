import styled, { keyframes } from "styled-components";
import { FadeDirection, FadeTop } from "./animation.components";
import { Color, Radius, Spacing } from "./constants";

export const ImageBoxStyled = styled.div`
  position: relative;
  z-index: 1;
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
  position: relative;
  width: 80%;
  height: 0;
  padding-bottom: 120%;
  background: ${Color.GrayDark} url(${(props) => props.frontImageUrl})
    no-repeat center center;
  background-size: cover;
  border-radius: ${Radius.Large};
  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    background-color: ${(props) =>
      props.solidBackground ? Color.Primary : "transparent"};
    left: -${Spacing.XLarge};
    top: -${Spacing.XLarge};
    width: 100%;
    height: 100%;
    
  }
`;

export const BackImageStyled = styled.div<ImageProps>`
  position: relative;
  vertical-align: bottom;
  right: 0;
  width: 50%;
  height: 0;
  padding-bottom: 50%;
  background: ${Color.Gray} url(${(props) => props.backImageUrl});
  background-size: cover;
`;

export const InvestorImage = styled.div<ImageProps>`
position: absolute;
  ${(props) => (props.alignFrontRight ? "right: 0" : "left: 0 ")};
  width: 100%;
  height: 100%;
  padding: 0;
  background: ${Color.GrayDark} url(${(props) => props.frontImageUrl})
    no-repeat center center;
  background-size: cover;

 
  &::before {
    content: "";
    position: absolute;
    z-index: -2;
    background-color: ${(props) =>
      props.solidBackground ? Color.Primary : "transparent"};
    left: -${Spacing.Small};
    top: -${Spacing.Small};
    width: 100%;
    height: 100%;
    
  }
  }
`;