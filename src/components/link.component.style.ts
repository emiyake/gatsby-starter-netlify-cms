import styled from "styled-components";
import { Color, Transition } from "./constants";

export const Link = styled.a`
  text-decoration: none;
  color: inherit;
  transition: color ${Transition.Fast};
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: ${Color.Primary};
  }
`;
