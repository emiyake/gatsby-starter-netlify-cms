import React from "react";
import { Col, Grid, Row } from "../grid";
import { Body, H1, H2, H3 } from "../typography";
import investorFrontImage from "../../img/img-investor-primary.jpg";
import investorBackImage from "../../img/img-investor-secondary.png";
import { ImageBox } from "../image-box.component";

// import { Container } from './styles';

export const GetInvestment: React.FC = () => {
  return (
    <>
      <Grid>
        <Row horizontalAlign="center">
          <Col desktop={6} tablet={6} mobile={12}>
          <ImageBox frontImageUrl={investorFrontImage} backImageUrl={investorBackImage} solidBackground={false} alignFrontRight={true}/>
          </Col>
          <Col desktop={6} tablet={6} mobile={12}>
            <H1>Receba investimentos</H1>
            <Body>
              O sucesso das startups é o nosso sucesso. Vamos além do capital.
              Apoiamos os empreendedores com a experiência dos nossos
              investidores associados. ganharam com seus anos de mercado.
              Obtenha as conexões certas para o sucesso da sua empresa.
            </Body>
          </Col>

          <Col desktop={6} tablet={6} mobile={12}>
            <H1>Aqui vai imagem</H1>
          </Col>
        </Row>
      </Grid>

      <Grid>
        <Row horizontalAlign="center">
          <Col desktop={6} tablet={6} mobile={12}>
            <H2>Vantagens</H2>
            <H3>Vantagem 01</H3>
            <H3>Vantagem 02</H3>
            <H3>Vantagem 03</H3>
          </Col>
        </Row>
      </Grid>
    </>
  );
};
