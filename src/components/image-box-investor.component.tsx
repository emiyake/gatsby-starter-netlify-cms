import React from "react";
import { FadeImageBoxStyled } from "./animation.components";
import { Tilt } from "./atm.tilt";
import {
  ImageBoxStyled,
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
