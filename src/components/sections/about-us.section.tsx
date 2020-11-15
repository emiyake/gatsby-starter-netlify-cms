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
import { CardFrame } from "./card-frame.component";
import { Hbox } from "../hbox.component";

export const AboutUs: React.FC = () => {
  return (
    <>
      <Separator type="section" />
        <Grid>
          <Row center="lg">
            <Col xs={12} md={10} lg={9} style={{ border: "1px solid red;" }}>
              <Reveal bottom cascade>
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
                    <Hbox.Item>
                      <NumberBox title="Startups investidas">
                        <CountUp start={0} end={8} duration={4} useEasing={true} />
                      </NumberBox>
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
                    <Hbox.Item>
                      <NumberBox title="Investidores anjo">
                        <CountUp start={0} end={126} duration={4} useEasing={true} />
                      </NumberBox>
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
                    <Hbox.Item>
                      <NumberBox title="milhões aportados">
                        $ <CountUp start={0} end={126} duration={4} useEasing={true} />
                      </NumberBox>
                    </Hbox.Item>
                  </Hbox>
                </CardFrame>
              </Reveal>
            </Col>
          </Row>
        </Grid>
      <Separator type="section" />
      <div id="trigger" />
    </>
  );
};
