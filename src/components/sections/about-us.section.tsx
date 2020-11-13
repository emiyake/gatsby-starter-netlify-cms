import React from "react";
import { TextBoxStyled } from "../about-us-text-section.component.style";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Separator } from "../separator.component.style";
import { Body, H1, H2, H3 } from "../typography";
import { Reveal } from "react-reveal";

export const AboutUs: React.FC = () => {
  return (
    <>
      <Separator type="section" />
      <Reveal>
        <Grid>
          <Row>
            <Col xs={12} md={10} lg={10} mdOffset={1}>
              <TextBoxStyled>
                <H3>Nossa missão</H3>
                <H2>Sobre nós</H2>
                <Body>
                  Somos uma associação de investidores, empreendedores e
                  empresários fundada por ex-alunos da Poli-USP apaixonados por
                  inovação e tecnologia. Conhecemos os desafios enfrentados
                  pelas startups early-stage e nossa missão é suportá-las com
                  mentoria, networking e investimento para juntos transformarmos
                  o país através do empreendedorismo.
                </Body>
              </TextBoxStyled>
            </Col>
          </Row>
        </Grid>
      </Reveal>
      <Separator type="section" />
      <div id="trigger" />
    </>
  );
};
