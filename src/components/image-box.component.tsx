import React from "react";
import { Tween } from "react-gsap";
import { Controller, Scene } from "react-scrollmagic";
import { FadeImageBoxStyled } from "./animation.components";
import { Tilt } from "./atm.tilt";
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
      <Controller>
        <Scene duration={600} pin={false} triggerElement="#trigger">
          {(progress) => (
            <Tween
              from={{
                css: { left: "1000px", top: "0", rotationY: 130, rotationX: -120, boxShadow: "0px 20px 0px 0px #000", borderBottomRightRadius:"1000px", borderTopLeftRadius:"300px" },
                ease: "Strong.easeOut",
              }}
              paused
              to={{
                css: {
                  left: "0px",
                  top: "0px",
                  rotationY: 0,
                  rotationX: 0,
                  boxShadow: "10px 10px 50px 1px #CCCCCC",
                  borderBottomRightRadius:"0px",
                  borderTopLeftRadius:"0px"
                },
                ease: "Strong.easeOut",
              }}
              totalProgress={progress}
            >
              <FrontImageStyled
                frontImageUrl={frontImageUrl}
                alignFrontRight={alignFrontRight}
                solidBackground={false}
              />
          </Tween>
          )}
        </Scene>
      </Controller>

      <FadeImageBoxStyled direction="bottom">
        <Controller>
          <Scene duration={800} pin={false} triggerElement="#trigger">
            {(progress) => (
              <Tween
                from={{
                  css: { left: "1000px", top: "500px", rotation: 0, scale: "0.5" },
                  ease: "Strong.easeOut",
                }}
                paused
                to={{
                  css: {
                    left: "-100px",
                    top: "0px",
                    rotation: 360,
                    scale: 1,
                  },
                  ease: "Strong.easeOut",
                }}
                totalProgress={progress}
              >
                <BackImageStyled
                  backImageUrl={backImageUrl}
                  alignFrontRight={alignFrontRight}
                />
             </Tween>
            )}
          </Scene>
        </Controller>
      </FadeImageBoxStyled>
    </ImageBoxStyled>
  );
};
