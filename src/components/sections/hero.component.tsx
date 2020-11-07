import React from "react";
import {
  HeroContentWrapperStyled,
  HeroStyled,
  HeroTextStyled,
} from "./hero.component.style";
import logo from "../img/logo.svg";
import { Link } from "gatsby";
import { Body, H1, H2 } from "../typography";
import { Separator } from "../separator.component.style";

export const Hero: React.FC = () => {
  return (
    <HeroStyled>
      <HeroContentWrapperStyled>
        <HeroTextStyled>Investimos em statups.</HeroTextStyled>
        <Separator type="content" />
        <Body>
          Fomentamos o empreendedorismo brasileiro através do empreendedorismo
        </Body>
      </HeroContentWrapperStyled>
    </HeroStyled>
  );
};
