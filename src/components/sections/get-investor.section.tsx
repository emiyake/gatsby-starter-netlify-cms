import React from "react";
import { Col, Grid, Row } from "react-flexbox-grid";
import { Body, H1, H2 } from "../typography";
import investorFrontImage from "../../img/img-investor-primary.jpg";
import investorBackImage from "../../img/img-investor-secondary.png";
import { ImageBox } from "../image-box.component";
import { Separator } from "../separator.component.style";
import { SectionWrapperStyled } from "../section-wrapper.component.style";
import { ListBox } from "../list-box.component";
import { Fade, Reveal } from "react-reveal";
import { Controller, Scene } from "react-scrollmagic";
import { Hbox } from "../hbox.component";
import { Button } from "./buttton.component";

export const GetInvestment: React.FC = () => {
  return (
    <>
      <Separator type="section" />
      <Grid>
        <Row between="xs" middle="sm" around="xs" reverse={true}>
          <Col xs={12} md={6} lg={5}>
            <Controller>
              <Scene duration={400} pin={false} triggerElement="#trigger">
                <ImageBox
                  frontImageUrl={investorFrontImage}
                  backImageUrl={investorBackImage}
                  solidBackground={false}
                  alignFrontRight={true}
                />
              </Scene>
            </Controller>
          </Col>
          <Col xs={12} md={6} lg={5}>
            <SectionWrapperStyled>
              <Reveal bottom cascade>
                <H1>Receba investimentos</H1>
                <Body>
                  Vamos além do capital. Apoiamos os empreendedores com a
                  experiência dos investidores associados. Obtenha as conexões
                  certas para o sucesso da sua startup.
                </Body>
              </Reveal>
            </SectionWrapperStyled>
          </Col>
        </Row>
      </Grid>
      <Separator type="section" />
      <Grid>
        <Row between="xs" middle="sm" around="xs">
          <Col xs={12} md={12} lg={5}>
            <Fade bottom>
                <Hbox.Item>
                  <H2>Inscreva sua startup</H2>
                </Hbox.Item>
                <Hbox.Item>
                  <Body>
                    Tenha acesso a centenas de investidores, com vasta
                    experiência no mercado e com uma forte de rede de
                    relacionamentos.
                  </Body>
                  <Separator type="content" />
                  <Button>
                    Inscreva-se aqui
                  </Button>
                </Hbox.Item>
              
            </Fade>
          </Col>
          <Col xs={12} md={12} lg={7}>
            <ListBox />
          </Col>
        </Row>
      </Grid>
      <Separator type="section" />
    </>
  );
};
