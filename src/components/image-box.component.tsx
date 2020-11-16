import { fromPairs } from "lodash";
import React from "react";
import { FadeImageBoxStyled } from "./animation.components";
import {
  ImageBoxStyled,
  FrontImageStyled,
  BackImageStyled,
} from "./image-box.component.style";
import { Fade } from "react-reveal"
import { Image } from "./image.component";
import investorBackImage from "..//img/img-investor-secondary.png";


export const ImageBox: React.FC = () => {
  return (
    <ImageBoxStyled>
      <Fade bottom cascade>

        <FrontImageStyled>
          <Image.GetMoney />
        </FrontImageStyled>
        <FadeImageBoxStyled direction="bottom">
          <BackImageStyled
            backImageUrl={investorBackImage}
          />
        </FadeImageBoxStyled>
      </Fade>
    </ImageBoxStyled>
  );
};
