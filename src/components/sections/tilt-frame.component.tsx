import React from "react";
import { Tilt } from "../atm.tilt";
import { TiltFrameStyled } from "./tilt-frame.component.style";

export const TiltFrame: React.FC = ({ children }) => {
  return (
    <Tilt>
      <TiltFrameStyled>{children}</TiltFrameStyled>
    </Tilt>
  );
};
