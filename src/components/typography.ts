import styled from "styled-components";
import {
  Color,
  FontFamily,
  FontSize,
  FontWeight,
  LineHeight,
  Spacing,
} from "./constants";

export const H1 = styled.h1`
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.Large};
  line-height: ${LineHeight.Large};
  font-weight: ${FontWeight.Medium};
  letter-spacing: 1.2px;
  color: ${Color.Secondary};
  &::first-line {
    color: ${Color.Primary};
    font-size:${FontSize.XLarge}
  }
`;

export const H2 = styled.h2`
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.Large};
  line-height: ${LineHeight.Large};
  font-weight: ${FontWeight.Medium};
  letter-spacing: 1.2px;
  color: ${Color.Secondary};
`;

export const H3 = styled.h3`
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.Medium};
  line-height: ${LineHeight.Medium};
  font-weight: ${FontWeight.Medium};
  color: ${Color.Primary};
`;

export const Span = styled.span`
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.XSmall};
  font-weight: ${FontWeight.Medium};
  color: ${Color.Quaternary};
  margin: ${Spacing.XSmall};
`;

export const Body = styled.p`
  font-family: ${FontFamily.Secondary};
  font-size: ${FontSize.Medium};
  font-weight: ${FontWeight.Normal};
  color: ${Color.Secondary};
  margin: ${Spacing.XSmall};
`;

export const Quote = styled.span`
  color: ${Color.Black};
`;
