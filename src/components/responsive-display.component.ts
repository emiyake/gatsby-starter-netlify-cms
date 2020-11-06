import { getOwnPropertySymbols } from "core-js/fn/object";
import styled from "styled-components";
import { Breakpoint } from "./constants";

interface HideComponentProps {
  hideInScreen?: "desktop" | "tablet" | "mobile";
}

const DisplayBreakpoint = {
  desktop: Breakpoint.Desktop,
  tablet: Breakpoint.Tablet,
  mobile: Breakpoint.Mobile,
};

export const HideComponentStyled = styled.div<HideComponentProps>`
  width: 100%;
  @media (max-width: ${(props) =>
      props.hideInScreen
        ? DisplayBreakpoint[props.hideInScreen]
        : Breakpoint.Mobile}) {
    display: none;
  }
`;

export const ShowComponentStyled = styled.div<HideComponentProps>`
  width: 100%;
  @media (min-width: ${(props) =>
      props.hideInScreen
        ? DisplayBreakpoint[props.hideInScreen]
        : Breakpoint.Mobile}) {
    display: none;
  }
`;

