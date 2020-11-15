import styled from "styled-components";
import { Color, Radius, Spacing, Transition } from "../constants";

export const ButtonStyled = styled.button`
    width: fit-content;
    padding: ${Spacing.Small} ${Spacing.Large};
    border-radius: ${Radius.Large};
    background-color: #B60083;
    color: ${Color.White};
    border: none;
    outline: none;
    transition: background-color ${Transition.Fast};    
    &:hover{
        cursor: pointer;
        background-color: ${Color.Primary};
    }

    
`