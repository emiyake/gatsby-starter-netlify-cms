import styled from "styled-components";
import { Color, Spacing } from "../constants";

export const NumberFrameStyled = styled.div`
position: relative;
padding-bottom: ${Spacing.Small};
  &:before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    top: -${Spacing.Small};
    right: -${Spacing.Small};
    z-index: -1;
    background-color: ${Color.Primary};
    }

`;
