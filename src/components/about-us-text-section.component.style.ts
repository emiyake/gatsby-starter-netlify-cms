import styled from "styled-components";
import { Color } from "./constants";

export const TextBoxStyled = styled.div`
  position: relative;
  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    right: 0;
    bottom: 0;
    width: 15%;
    height: 0;
    padding-bottom: 15%;
    background-color: ${Color.Primary};
  }
`