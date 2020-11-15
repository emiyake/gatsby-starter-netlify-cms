import styled from "styled-components";
import {
  Color,
  FontFamily,
  FontSize,
  FontWeight,
  LineHeight,
  Spacing,
} from "./constants";

interface NumberBoxProps {
  type?: "primary" | "secondary" | "tertiary" | "quaternary";
}

const BackgroundAlign = {
  primary: "top: 0; left: 0",
  secondary: "top: 0; right: 0",
  tertiary: "bottom: 0; right: 0",
  quaternary: "bottom: 0; left: 0",
};

export const NumberBoxStyled = styled.div<NumberBoxProps>`
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.Medium};
  line-height: ${LineHeight.Large};
  font-weight: ${FontWeight.Medium};
  color: ${Color.Black};
  background-color: transparent;
`;

export const NumberBoxWrapperStyled = styled.div`
  text-align: center;
`;

export const NumberDisplayTitleStyled = styled.h2`
  text-align: center;
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.XSmall};
  line-height: ${LineHeight.Small};
  font-weight: ${FontWeight.Medium};
  letter-spacing: 1.2px;
  color: ${Color.Black};

`;

interface AlignBoxProps {
  horizontalAlign?: string;
}

export const AlignBoxStyled = styled.div<AlignBoxProps>`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: ${props => props.horizontalAlign ? props.horizontalAlign : "flex-start"};
`