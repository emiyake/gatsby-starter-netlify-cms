import React from "react";
import {
  HeroGridStyled,
  HeroStyled,
  StrongWordBoxStyled,
} from "./hero.component.style";
import { Body, DisplayStyled, Enhance } from "../typography";
import Typist from "react-typist";
import { Col, Grid, Row } from "react-flexbox-grid";

export const Hero: React.FC = () => {
  return (
    <HeroStyled>
      <HeroGridStyled>
        <Row>
          <Col xs={12}>
            <DisplayStyled>
              Investimos em
              <StrongWordBoxStyled>
                <Typist cursor={{element: " "}} >
                  <Typist.Delay ms={0} />
                  <Enhance>startups</Enhance>&nbsp;
                  <Typist.Backspace count={9} delay={1500} />
                  <Enhance>empreendedores</Enhance>
                  <Typist.Backspace count={14} delay={1500} />
                  <Enhance>líderes</Enhance>&nbsp;
                  <Typist.Backspace count={8} delay={1500} />
                  <Enhance>inovação</Enhance>&nbsp;
                  <Typist.Backspace count={9} delay={1500} />
                  <Enhance>tecnologia</Enhance>&nbsp;
                  <Typist.Backspace count={11} delay={1500} />
                  <Enhance>startups</Enhance>&nbsp;
                </Typist>
              </StrongWordBoxStyled>
              </DisplayStyled>
            <Body>
              Fomentamos o empreendedorismo brasileiro através do{" "}
              <Enhance>investimento anjo</Enhance>.
            </Body>
          </Col>
        </Row>
      </HeroGridStyled>
    </HeroStyled>
  );
};
