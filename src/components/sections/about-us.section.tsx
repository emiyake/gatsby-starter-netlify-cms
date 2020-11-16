import React from "react";

import { Grid, Row, Col } from "react-flexbox-grid";
import { Separator } from "../separator.component.style";
import { Body, BodySecondary, H2, Stats } from "../typography";
import { Reveal } from "react-reveal";
import CountUp from "react-countup";
import { Image } from "../image.component";
import { CardFrame } from "./card-frame.component";
import { Hbox } from "../hbox.component";
import { SectionStyled } from "./section.component.style";

export const AboutUs: React.FC = () => {
  return (
    <SectionStyled>
      <Grid>
        <Row center="lg">
          <Col xs={12} md={10} lg={9}>
            <Reveal bottom cascade>
              <H2 box={true}>Sobre a Poli Angels</H2>
              <Body>
                Somos uma associação de investidores, empreendedores e
                empresários fundada por ex-alunos da Poli-USP apaixonados por
                inovação e tecnologia. Conhecemos os desafios enfrentados
                pelas startups early-stage e nossa missão é suportá-las com
                mentoria, networking e investimento para juntos transformarmos
                o país através do empreendedorismo.
              </Body>
            </Reveal>
          </Col>
        </Row>
        <Separator type="section" />
        <Row center='md'>
          <Col xs={12} md={4} lg={3}>
            <Reveal bottom>
              <CardFrame>
                <Hbox>
                  <Hbox.Item hAlign='center' noGrow={true}>
                    <Image.Rocket />
                  </Hbox.Item>
                  <Hbox.Item hAlign='center'>
                    <Stats>
                      <CountUp start={0} end={8} duration={4} useEasing={true} />
                    </Stats>
                    <BodySecondary align='center'>startups investidas</BodySecondary>
                  </Hbox.Item>
                </Hbox>
              </CardFrame>
            </Reveal>
          </Col>
          <Col xs={12} md={4} lg={3}>
            <Reveal bottom wait={2000}>
              <CardFrame>
                <Hbox>
                  <Hbox.Item hAlign='center' noGrow={true}>
                    <Image.Members />
                  </Hbox.Item>
                  <Hbox.Item hAlign='center'>
                    <Stats>
                      <CountUp start={0} end={126} duration={4} useEasing={true} />
                    </Stats>
                    <BodySecondary align='center'>investidores anjo</BodySecondary>
                  </Hbox.Item>
                </Hbox>
              </CardFrame>
            </Reveal>
          </Col>
          <Col xs={12} md={4} lg={3}>
            <Reveal bottom wait={400}>
              <CardFrame>
                <Hbox>
                  <Hbox.Item hAlign='center' noGrow={true}>
                    <Image.Coin />
                  </Hbox.Item>
                  <Hbox.Item hAlign='center'>
                    <Stats>
                      $ <CountUp start={0} end={12} duration={4} useEasing={true} />
                    </Stats>
                    <BodySecondary align='center'>milhões aportados</BodySecondary>
                  </Hbox.Item>
                </Hbox>
              </CardFrame>
            </Reveal>
          </Col>
        </Row>
      </Grid>
    </SectionStyled>
  );
};
