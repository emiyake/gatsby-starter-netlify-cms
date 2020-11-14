import styled from "styled-components";
import { Color } from "./constants";

export const TextBoxStyled = styled.div`
  position: relative;
  z-index: 0;
  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    right: 0;
    bottom: 0;
    width: 100px;
    height: 0;
    padding-bottom: 100px;
    background-color: ${Color.Primary};
  }
`;
