import React from "react";
import { Grid, Row, Col } from "../grid";
import { H2, H3, H1 } from "../typography";

export const OurNumbers: React.FC = () => {
  return (
    <Grid>
      <Row horizontalAlign="center">
      <Col desktop={6} tablet={6} mobile={12}>
          <H1>Aqui vai imagem</H1>
        </Col>
        <Col desktop={6} tablet={6} mobile={12}>
          <H3>
            Rounds
          </H3>
          <H3>
            Total investido
          </H3>
          <H3>
            Investidores
          </H3>
        </Col>
        

      </Row>
    </Grid>
  );
};
