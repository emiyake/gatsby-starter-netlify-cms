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

export const GetInvestment: React.FC = () => {
  return (
    <>
      <Separator type="section" />
      <Grid>
        <Row between="xs" middle="sm" around="xs" reverse={true}>
          <Col xs={12} md={6} lg={5}>
            <SectionWrapperStyled>
              <Reveal bottom cascade>
                <H1>Receba investimentos</H1>
                <Separator type="content" />
                <Body>
                  O sucesso das startups é o nosso sucesso. Vamos além do
                  capital. Apoiamos os empreendedores com a experiência dos
                  nossos investidores associados. ganharam com seus anos de
                  mercado. Obtenha as conexões certas para o sucesso da sua
                  empresa.
                </Body>
              </Reveal>
            </SectionWrapperStyled>
          </Col>
          <Col xs={12} md={6} lg={5}>
            <ImageBox
              frontImageUrl={investorFrontImage}
              backImageUrl={investorBackImage}
              solidBackground={false}
              alignFrontRight={true}
            />
          </Col>
        </Row>
      </Grid>
      <Separator type="section" />
      <Grid>
        <Row between="xs" middle="sm" around="xs">
          <Col xs={12} md={12} lg={5}>
            <Fade bottom>
              <H2>Inscreva sua startup</H2>
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
