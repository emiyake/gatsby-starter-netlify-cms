import styled from "styled-components";
import { Color, Radius, Spacing } from "../constants";

export const CardFrameWrapperStyled = styled.div`
position: relative;
  &:before {
    content: " ";
    z-index: -1;
    position: absolute;
    bottom: ${Spacing.Large};
    left: ${Spacing.Medium};
    top: -${Spacing.Medium};
    right: -${Spacing.Medium};
    background-color: ${Color.Primary};
  }

`;

export interface CardFrameStyledProps {
  noPadding?: boolean;
  noBorder?: boolean;
}

export const CardFrameStyled = styled.div`
  border-radius: ${(props: CardFrameStyledProps) => props.noBorder ? '0' : Radius.Large};
  background-color: ${(props: CardFrameStyledProps) => props.noPadding ? 'transparent' : Color.White};
  padding: ${(props: CardFrameStyledProps) => props.noPadding ? '0' : Spacing.Large};
`;
