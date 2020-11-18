import React from "react";
import { CardFrameStyled, CardFrameStyledProps, CardFrameWrapperStyled } from "./card-frame.component.style";

interface NoEffectsCardProps extends CardFrameStyledProps {
}

export const NoEffectsCardFrame: React.FC<NoEffectsCardProps> = ({noBorder, noPadding, children}) => {
    return(
        <CardFrameWrapperStyled>    
          <CardFrameStyled noPadding={noPadding} noBorder={noBorder}>
            {children}
          </CardFrameStyled>
      </CardFrameWrapperStyled>
    )
}