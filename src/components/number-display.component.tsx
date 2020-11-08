import React from 'react';
import { NumberBoxStyled, NumberDisplayBoxStyled, NumberDisplayTitleStyled } from './number-display.component.style';


interface NumberBoxProps {
  type?: "primary" | "secondary" | "tertiary" | "quaternary";
  title?: string;
}
export const NumberBox: React.FC<NumberBoxProps> = ({children, type, title}) => {
  return (
    <NumberDisplayBoxStyled>
      <NumberBoxStyled type={type}> 
        {children}
      </NumberBoxStyled>
      <NumberDisplayTitleStyled>
        {title}
      </NumberDisplayTitleStyled>
    </NumberDisplayBoxStyled>
  );
}

