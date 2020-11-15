import React from "react";

import { Grid, Row, Col } from "react-flexbox-grid";
import { Separator } from "../separator.component.style";
import { Body, BodySecondary, H2, Stats } from "../typography";
import { Reveal } from "react-reveal";
import CountUp from "react-countup";
import { Image } from "../image.component";
import { CardFrame } from "./card-frame.component";
import { Hbox } from "../hbox.component";

export const AboutUs: React.FC = () => {
  return (
    <>
      <Separator type="section" />
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
          <Row>
            <Col xs={12} md={4} lg={4}>
              <Reveal bottom>
                <CardFrame>
                  <Hbox>
                    <Hbox.Item hAlign='center'>
                      <Image.Rocket />
                    </Hbox.Item>
                    <Hbox.Item hAlign='center'>
                      <Stats>
                        <CountUp start={0} end={8} duration={4} useEasing={true} />
                      </Stats>
                      <BodySecondary>startups investidas</BodySecondary>
                    </Hbox.Item>
                  </Hbox>
                </CardFrame>
              </Reveal>
            </Col>
            <Col xs={12} md={4} lg={4}>
              <Reveal bottom wait={2000}>
                <CardFrame>
                  <Hbox>
                    <Hbox.Item hAlign='center'>
                      <Image.Members />
                    </Hbox.Item>
                    <Hbox.Item hAlign='center'>
                      <Stats>
                        <CountUp start={0} end={126} duration={4} useEasing={true} />
                      </Stats>
                      <BodySecondary>investidores anjo</BodySecondary>
                    </Hbox.Item>
                  </Hbox>
                </CardFrame>
              </Reveal>
            </Col>
            <Col xs={12} md={4} lg={4}>
              <Reveal bottom wait={400}>
                <CardFrame>
                  <Hbox>
                    <Hbox.Item hAlign='center'>
                      <Image.coin />
                    </Hbox.Item>
                    <Hbox.Item hAlign='center'>
                      <Stats>
                        $ <CountUp start={0} end={12} duration={4} useEasing={true} />
                      </Stats>
                      <BodySecondary>milhões aportados</BodySecondary>
                    </Hbox.Item>
                  </Hbox>
                </CardFrame>
              </Reveal>
            </Col>
          </Row>
        </Grid>
      <Separator type="section" />
    </>
  );
};
