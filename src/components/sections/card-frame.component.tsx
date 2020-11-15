import React from "react";
import { CardFrameStyled, CardFrameStyledProps, CardFrameWrapperStyled } from "./card-frame.component.style";
import { Tilt } from "../atm.tilt";

interface CardFrameProps extends CardFrameStyledProps {
}

export const CardFrame: React.FC<CardFrameProps> = ({noBorder, noPadding, children}) => {
  return (
    <CardFrameWrapperStyled>    
      <Tilt>
        <CardFrameStyled noPadding={noPadding} noBorder={noBorder}>
          {children}
        </CardFrameStyled>
      </Tilt>
    </CardFrameWrapperStyled>
  )
}