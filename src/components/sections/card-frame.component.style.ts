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
    z-index: -1;
    background-color: ${Color.Primary};
  }

`;

export const CardFrameStyled = styled.div`
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.12);
  border-radius: ${Radius.Large};
  background-color: ${Color.White};
  padding: ${Spacing.Large};
`;
