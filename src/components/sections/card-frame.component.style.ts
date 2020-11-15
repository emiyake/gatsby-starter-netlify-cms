import styled from "styled-components";
import { Color, Radius, Spacing } from "../constants";

export const CardFrameWrapperStyled = styled.div`
position: relative;
  &:before {
    content: " ";
    position: absolute;
    bottom: ${Spacing.Small};
    left: ${Spacing.Medium};
    top: -${Spacing.Small};
    right: -${Spacing.Small};
    background-color: ${Color.Primary};
  }

`;

export interface CardFrameStyledProps {
  noPadding?: boolean;
  noBorder?: boolean;
}

export const CardFrameStyled = styled.div`
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.04);
  overflow: hidden;
  border-radius: ${(props: CardFrameStyledProps) => props.noBorder ? '0' : Radius.Large};

  background-color: ${Color.White};
  padding: ${(props: CardFrameStyledProps) => props.noPadding ? '0' : Spacing.Large};
`;
