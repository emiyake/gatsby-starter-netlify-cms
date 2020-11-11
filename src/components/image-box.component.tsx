import React from "react";
import { FadeImageBoxStyled } from "./animation.components";
import {
  ImageBoxStyled,
  FrontImageStyled,
  BackImageStyled,
} from "./image-box.component.style";


interface ImageBoxProps {
  frontImageUrl?: string;
  backImageUrl?: string;
  solidBackground?: boolean;
  alignFrontRight?: boolean;
}
export const ImageBox: React.FC<ImageBoxProps> = ({
  frontImageUrl,
  backImageUrl,
  solidBackground,
  alignFrontRight,
}) => {
  return (
    
      <ImageBoxStyled>
          <FadeImageBoxStyled direction="top">
          <FrontImageStyled
            frontImageUrl={frontImageUrl}
            solidBackground={solidBackground}
            alignFrontRight={alignFrontRight}
          />
          </FadeImageBoxStyled>
          
        <FadeImageBoxStyled direction="bottom">
        <BackImageStyled
          backImageUrl={backImageUrl}
          alignFrontRight={alignFrontRight}
        />
        </FadeImageBoxStyled> 
      </ImageBoxStyled>
  );
};
