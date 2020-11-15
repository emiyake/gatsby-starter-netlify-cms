import React from "react";
import { ButtonStyled } from "./button.component.style";

export const Button: React.FC = ({children}) => {
    return(
        <ButtonStyled>
            {children}
        </ButtonStyled>
    )
}