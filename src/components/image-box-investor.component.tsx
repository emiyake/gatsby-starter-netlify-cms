import React from "react";
import { Tween } from "react-gsap";
import { Controller, Scene } from "react-scrollmagic";
import { FadeImageBoxStyled } from "./animation.components";
import { Tilt } from "./atm.tilt";
import {
  ImageBoxStyled,
  FrontImageStyled,
  BackImageStyled,
  InvestorImage,
} from "./image-box.component.style";

interface ImageBoxProps {
  frontImageUrl?: string;
  backImageUrl?: string;
  solidBackground?: boolean;
  alignFrontRight?: boolean;
}
export const ImageBoxInvestor: React.FC<ImageBoxProps> = ({
  frontImageUrl,
  backImageUrl,
  solidBackground,
  alignFrontRight,
}) => {
  return (
      <Tilt>
    <ImageBoxStyled>
      <FadeImageBoxStyled direction={"bottom"}>
        <InvestorImage
          frontImageUrl={frontImageUrl}
          solidBackground={solidBackground}
          alignFrontRight={alignFrontRight}
        />

      </FadeImageBoxStyled>
    </ImageBoxStyled>
        </Tilt>
  );
};
