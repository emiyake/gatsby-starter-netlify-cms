import React from "react";
import {
  AboutUsTitleStyled,
  TextBoxStyled,
} from "../about-us-text-section.component.style";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Separator } from "../separator.component.style";
import { Body, H2 } from "../typography";
import { Reveal } from "react-reveal";
import { NumberBox } from "../number-display.component";
import CountUp from "react-countup";
import { Image } from "../image.component";
import { NumberFrame } from "./number-frame.component";

export const AboutUs: React.FC = () => {
  return (
    <>
      <Separator type="section" />
      <Reveal>
        <Grid>
          <Row center="lg">
            <Col xs={12} md={10} lg={9} style={{ border: "1px solid red;" }}>
              <TextBoxStyled>
                <AboutUsTitleStyled>
                  <H2>Sobre a Poli Angels</H2>
                </AboutUsTitleStyled>
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
          <Separator type="section" />
          <Row>
            <Col xs={12} md={4} lg={4}>
              <NumberFrame>
                <Image.Rocket />
                <NumberBox type={"primary"} title="startups investidas">
                  <CountUp start={0} end={8} duration={4} useEasing={true} />
                </NumberBox>
              </NumberFrame>
            </Col>
            <Col xs={12} md={4} lg={4}>
              <NumberFrame>
                <Image.members />
                <NumberBox type={"tertiary"} title="Investidores anjo">
                  <CountUp start={0} end={126} duration={4} useEasing={true} />
                </NumberBox>
              </NumberFrame>
            </Col>
            <Col xs={12} md={4} lg={4}>
              <NumberFrame>
                <Image.coin />
                <NumberBox type={"secondary"} title="Milhões aportados">
                  <CountUp start={0} end={10} duration={4} useEasing={true} />
                </NumberBox>
              </NumberFrame>
            </Col>
          </Row>
        </Grid>
      </Reveal>
      <Separator type="section" />
      <div id="trigger" />
    </>
  );
};
