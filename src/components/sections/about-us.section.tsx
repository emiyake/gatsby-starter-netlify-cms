import React from "react";
import { Grid, Row, Col } from "../grid";
import { Body, H1, H2, H3 } from "../typography";

export const AboutUs: React.FC = () => {
  return (

    <Grid>
        <Row horizontalAlign="center">
        <Col desktop={6}>
          <H3>Nossa missão</H3>
        </Col>
      </Row>
      <Row horizontalAlign="center">
        <Col desktop={6}>
          <H2>Sobre a Poli Angels</H2>
        </Col>
      </Row>
      <Row horizontalAlign="center">
        <Col desktop={6}>
          <Body>
            O sucesso das startups é o nosso sucesso. Vamos além do capital.
            Apoiamos os empreendedores com a experiência dos nossos investidores
            associados. ganharam com seus anos de mercado. Obtenha as conexões
            certas para o sucesso da sua empresa.
          </Body>
        </Col>
      </Row>
    </Grid>
  );
};
