import React from "react";
import { NumberFrameStyled } from "./number-frame.component.style";
import { TiltFrame } from "./tilt-frame.component";

export const NumberFrame: React.FC = ({children}) => {
    return (
        <NumberFrameStyled>
        <TiltFrame>
            {children}
        </TiltFrame>
        </NumberFrameStyled>
    )
}