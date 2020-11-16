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
  line-height: ${LineHeight.XLarge};
  font-weight: ${FontWeight.Bold};
  color: ${Color.Black};
  &::first-line {
    color: ${Color.Primary};
    font-size:${FontSize.XLarge}
  }
  margin-bottom: ${Spacing.Medium};
`;

interface H2Props {
  box?: boolean;
}
export const H2 = styled.h2`
  position: relative;
  display: inline-block;
  z-index: 1;
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.Large};
  line-height: ${LineHeight.Large};
  font-weight: ${FontWeight.Bold};
  color: ${Color.Black};
  margin-bottom: ${Spacing.Large};

  ${
    (props: H2Props) => {
      if (props.box) {
        return `
          &:before {
            top: -48px;
            left: -${Spacing.Large};
            z-index: -1;
            position: absolute;
            width: 100px;
            height: 100px;
            background-color: ${Color.Primary};
            content: " ";
          }
        `;
      }
    }
  }  
`;

export const H3 = styled.h3`
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.Medium};
  line-height: ${LineHeight.Medium};
  font-weight: ${FontWeight.Medium};
  margin: ${Spacing.Medium} 0 ${Spacing.Small};
  color: ${Color.Black};
`;

export const Body = styled.p`
  font-family: ${FontFamily.Secondary};
  font-size: ${FontSize.Small};
  font-weight: ${FontWeight.Regular};
  color: ${Color.GrayDark};
`;

interface BodySecondaryProps {
  align?: string;
}

export const BodySecondary = styled.p`
  font-family: ${FontFamily.Secondary};
  font-size: ${FontSize.XSmall};
  font-weight: ${FontWeight.Regular};
  color: ${Color.GrayDark};
  text-align: ${(props: BodySecondaryProps) => props.align || 'left'};
`;

export const Quote = styled.span`
  color: ${Color.Black};
`;

export const Enhance = styled.span`
  color: ${Color.Primary};
  font-weight: ${FontWeight.Bold};
`;

export const Stats = styled.label`
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.Large};
  line-height: ${LineHeight.Large};
  font-weight: ${FontWeight.Bold};
  color: ${Color.Black};
  background-color: transparent;
`;
