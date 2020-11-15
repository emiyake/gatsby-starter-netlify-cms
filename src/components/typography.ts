import styled from "styled-components";
import {
  Color,
  FontFamily,
  FontSize,
  FontWeight,
  LineHeight,
  Spacing,
} from "./constants";

export const DisplayStyled = styled.h1`
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.XLarge};
  line-height: ${LineHeight.XLarge};
  font-weight: ${FontWeight.Bold};
  color: ${Color.Black};
`

export const H1 = styled.h1`
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.Large};
  line-height: ${LineHeight.Large};
  font-weight: ${FontWeight.Bold};
  color: ${Color.Black};
  &::first-line {
    color: ${Color.Primary};
    font-size:${FontSize.XLarge}
  }
  margin-bottom: ${Spacing.Medium};
`;

export const H2 = styled.h2`
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.Large};
  line-height: ${LineHeight.Large};
  font-weight: ${FontWeight.Bold};
  color: ${Color.Black};
  margin-bottom: ${Spacing.Medium};
`;

export const H3 = styled.h3`
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.Medium};
  line-height: ${LineHeight.Medium};
  font-weight: ${FontWeight.Medium};
  margin: ${Spacing.Medium} 0;
  color: ${Color.Black};
`;

export const Span = styled.span`
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.XSmall};
  font-weight: ${FontWeight.Medium};
  color: ${Color.GrayDark};
  margin: ${Spacing.XSmall};
`;

export const Body = styled.p`
  font-family: ${FontFamily.Secondary};
  font-size: ${FontSize.Medium};
  font-weight: ${FontWeight.Regular};
  color: ${Color.GrayDark};
`;


export const BodySecondary = styled.p`
  font-family: ${FontFamily.Secondary};
  font-size: ${FontSize.Small};
  font-weight: ${FontWeight.Regular};
  color: ${Color.GrayDark};
`;

export const Quote = styled.span`
  color: ${Color.Black};
`;

export const Enhance = styled.span`
  color: ${Color.Primary};
  font-weight: ${FontWeight.Bold};
`;

