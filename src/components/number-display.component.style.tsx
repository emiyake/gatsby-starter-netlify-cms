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
  position: relative;
  display: flex;
  justify-content: center;
  min-width: 100px;
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.Large};
  line-height: ${LineHeight.Large};
  font-weight: ${FontWeight.Medium};
  letter-spacing: 1.2px;
  color: ${Color.Secondary};
  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    ${(props) =>
      props.type ? BackgroundAlign[props.type] : BackgroundAlign.primary};
    width: 75%;
    height: 75%;
    background-color: ${Color.Primary};
  }
`;

export const NumberDisplayBoxStyled = styled.div`
  max-width: 200px;
  display: flex; 
  padding: ${Spacing.Medium};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NumberDisplayTitleStyled = styled.h4`
  text-align: center;
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.Small};
  line-height: ${LineHeight.Small};
  font-weight: ${FontWeight.Medium};
  letter-spacing: 1.2px;
  color: ${Color.Tertiary};

`;
