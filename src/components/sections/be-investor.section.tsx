import React from "react";
import { Col, Grid, Row } from "../grid";
import { H1, H2, H3 } from "../typography";

// import { Container } from './styles';

export const BeInvestor: React.FC = () => {
  return (
      <>
    <Grid>
      <Row horizontalAlign="center">
        <Col desktop={6} tablet={6} mobile={12}>
          <H2>Dê propósito ao seu capital. invista em startups com alto potencial de crescimento.	</H2>
          <H3>
            Faça parte dos negócios do futuro associando-se às startups mais promissoras para você.

          </H3>
        </Col>

        <Col  desktop={6} tablet={6} mobile={12}>
            <H1>Aqui vai imagem</H1>

        </Col>
      </Row>
    </Grid>

</>
  );
};
