import styled from "styled-components";
import {
  Color,
  FontFamily,
  FontSize,
  FontWeight,
  Spacing,
  Transition,
} from "./constants";

export const H1 = styled.h1`
  padding: 0;
  margin: 0;
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.Large};
  line-height: 1.5;
  font-weight: ${FontWeight.Medium};
  letter-spacing: 1.2px;
  color: ${Color.Black};
`;

export const H2 = styled.h2`
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.Small};
  line-height: 1.5;
  font-weight: ${FontWeight.Medium};
  margin: 0;
  transition: color ${Transition.Fast};
  color: ${Color.Primary};
`;

export const H3 = styled.h3`
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.Small};
  line-height: 1.5;
  font-weight: ${FontWeight.Bold};
  margin: 0;
  transition: color ${Transition.Fast};
  &:hover {
    color: ${Color.Secondary};
  }
`;

export const H4 = styled.h4`
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.XSmall};
  font-weight: ${FontWeight.Medium};
  color: ${Color.Quaternary};
`;

export const Span = styled.span`
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.XSmall};
  font-weight: ${FontWeight.Medium};
  color: ${Color.Quaternary};
  margin: ${Spacing.XSmall};
`;

export const Body = styled.p`
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.Medium};
  font-weight: ${FontWeight.Normal};
  color: ${Color.Quaternary};
  margin: ${Spacing.XSmall};
`;

export const Quote = styled.span`
  color: ${Color.Black};
`;
