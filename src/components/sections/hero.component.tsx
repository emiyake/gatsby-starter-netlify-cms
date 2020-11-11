import React from "react";
import {
  DisplayStyled,
  HeroContentWrapperStyled,
  HeroStyled,
  StrongWordBoxStyled,
} from "./hero.component.style";
import { Body, Enhance } from "../typography";
import { Separator } from "../separator.component.style";
import Typist from "react-typist";

export const Hero: React.FC = () => {
  return (
    <HeroStyled>
      <HeroContentWrapperStyled>
        <DisplayStyled>
          Investimos em
          <StrongWordBoxStyled>
          <Typist cursor={{element: " "}} >
            <Typist.Delay ms="500" />
            <Enhance>Jovens</Enhance>&nbsp;
            <Typist.Backspace count={8} delay={1500} />
            <Enhance>Líderes</Enhance>
            <Typist.Backspace count={9} delay={1500} />
            <Enhance>Startups</Enhance>&nbsp;
          </Typist>
          </StrongWordBoxStyled>
          </DisplayStyled>

        <Body>
          Fomentamos o empreendedorismo brasileiro através do{" "}
          <Enhance>investimento</Enhance>.
        </Body>
      </HeroContentWrapperStyled>
    </HeroStyled>
  );
};
