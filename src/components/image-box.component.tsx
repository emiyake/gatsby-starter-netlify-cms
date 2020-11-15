import { fromPairs } from "lodash";
import React from "react";
import { FadeImageBoxStyled } from "./animation.components";
import {
  ImageBoxStyled,
  FrontImageStyled,
  BackImageStyled,
} from "./image-box.component.style";
import { Fade } from "react-reveal"

interface ImageBoxProps {
  frontImageUrl?: string;
  backImageUrl?: string;
  solidBackground?: boolean;
  alignFrontRight?: boolean;
}
export const ImageBox: React.FC<ImageBoxProps> = ({
  frontImageUrl,
  backImageUrl,
  alignFrontRight,
}) => {
  return (
    <ImageBoxStyled>
      <Fade bottom>
      <FrontImageStyled
        frontImageUrl={frontImageUrl}
        alignFrontRight={alignFrontRight}
        solidBackground={true}
      />
      </Fade>
      <FadeImageBoxStyled direction="bottom">
        <BackImageStyled
          backImageUrl={backImageUrl}
          alignFrontRight={alignFrontRight}
        />
      </FadeImageBoxStyled>
    </ImageBoxStyled>
  );
};
