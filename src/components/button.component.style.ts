import styled from "styled-components";
import { Color, FontFamily, FontWeight, Radius, Spacing, Transition } from "./constants";

export const ButtonStyled = styled.a`
    font-family: ${FontFamily.Primary};
    padding: ${Spacing.Small} ${Spacing.Large};
    border-radius: ${Radius.Large};
    background-color: ${Color.CallToAction};
    font-weight: ${FontWeight.Medium};
    color: ${Color.White};
    border: none;
    outline: none;
    &:hover{
        cursor: pointer;
        color: ${Color.White};
        background-color: ${Color.CallToAction}CC;
    }    
`;
