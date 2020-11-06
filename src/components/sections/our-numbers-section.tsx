import React from "react";
import { Grid, Row, Col } from "../grid";
import { NumberBox } from "../number-display.component";
import { Separator } from "../separator.component.style";
import { H2, H3, H1 } from "../typography";

export const OurNumbers: React.FC = () => {
  return (
    <>
    <Separator type="section" />
    <Grid>
      <Row horizontalAlign="center">
      <Col desktop={12} tablet={6} mobile={12}>
          <H1>Nossos <br/>números</H1>
        </Col>
      </Row>
      <Row>
        <Col desktop={4} tablet={6} mobile={12} horizontalAlign="center">
          <NumberBox type={"tertiary"} title="Número de rounds">
            8
          </NumberBox>
        </Col>
        <Col desktop={4} tablet={6} mobile={12} horizontalAlign="center">
          <NumberBox  type={"secondary"} title="Número de investidores">
            17
          </NumberBox>
        </Col>
        <Col desktop={4} tablet={6} mobile={12} horizontalAlign="center">
          <NumberBox  type={"tertiary"} title="Total investido">
            189
          </NumberBox>
        </Col>
      </Row>
    </Grid>
    <Separator type="section" />
    </>
  );
};
