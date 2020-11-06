import React from "react";
import { Col, Grid, Row } from "../grid";
import { Body, H1, H2, H3 } from "../typography";
import investorFrontImage from "../../img/img-investor-primary.jpg";
import investorBackImage from "../../img/img-investor-secondary.png";
import { ImageBox } from "../image-box.component";
import { Separator } from "../separator.component.style";
import { SectionWrapperStyled } from "../section-wrapper.component.style";

// import { Container } from './styles';

export const GetInvestment: React.FC = () => {
  return (
    <>
      <Separator type="section" />
      <Grid>
        <Row horizontalAlign="space-around" verticalAlign="center">
          <Col desktop={3} tablet={6} mobile={12} horizontalAlign="center">
            <ImageBox
              frontImageUrl={investorFrontImage}
              backImageUrl={investorBackImage}
              solidBackground={false}
              alignFrontRight={true}
            />
          </Col>
          <Col desktop={6} tablet={6} mobile={12} verticalAlign="center">
            <SectionWrapperStyled>
              <H1>
                Receba <br />
                investimentos
              </H1>
              <Separator type="content" />
              <Body>
                O sucesso das startups é o nosso sucesso. Vamos além do capital.
                Apoiamos os empreendedores com a experiência dos nossos
                investidores associados. ganharam com seus anos de mercado.
                Obtenha as conexões certas para o sucesso da sua empresa.
              </Body>
            </SectionWrapperStyled>
          </Col>
        </Row>
      </Grid>
      <Separator type="section" />
      <Grid>
        <Row horizontalAlign="center">
          <Col desktop={6} tablet={12} mobile={12}>
            <H1>Aqui vai imagem</H1>
          </Col>
          <Col desktop={6} tablet={6} mobile={12}>
            <H2>Vantagens</H2>
            <H3>Vantagem 01</H3>
            <H3>Vantagem 02</H3>
            <H3>Vantagem 03</H3>
          </Col>
        </Row>
      </Grid>
      <Separator type="section" />
    </>
  );
};
