import React from 'react';
import { NumberBoxStyled, NumberBoxWrapperStyled, NumberDisplayTitleStyled } from './number-display.component.style';
import { BodySecondary } from './typography';

interface NumberBoxProps {
  title?: string;
}
export const NumberBox: React.FC<NumberBoxProps> = ({children, title}) => {
  return (
    <NumberBoxWrapperStyled>
      <NumberBoxStyled>{children}</NumberBoxStyled>
      <BodySecondary>{title}</BodySecondary>
    </NumberBoxWrapperStyled>
  );
}

