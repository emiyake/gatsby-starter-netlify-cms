import React from "react";
import { CardFrameStyled, CardFrameWrapperStyled } from "./card-frame.component.style";
import { Tilt } from "../atm.tilt";

export const CardFrame: React.FC = ({children}) => {
  return (
    <CardFrameWrapperStyled>    
      <Tilt>
        <CardFrameStyled>
          {children}
        </CardFrameStyled>
      </Tilt>
    </CardFrameWrapperStyled>
  )
}