import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { NumberBox } from "../number-display.component";
import { AlignBoxStyled } from "../number-display.component.style";
import { Separator } from "../separator.component.style";
import { H2, H3, H1 } from "../typography";

export const OurNumbers: React.FC = () => {
  return (
    <>
      <Separator type="section" />
      <Grid>
        <Row>
          <Col>
            <H1>
              Nossos <br />
              números
            </H1>
          </Col>
        </Row>
        <Row center="xs">
          <Col xs={12} md={4} lg={4}>
            <AlignBoxStyled horizontalAlign="center">
              <NumberBox type={"tertiary"} title="Número de rounds">
                8
              </NumberBox>
            </AlignBoxStyled>
          </Col>
          <Col xs={12} md={4} lg={4}>
            <AlignBoxStyled horizontalAlign="center">
              <NumberBox type={"secondary"} title="Número de investidores">
                17
              </NumberBox>
            </AlignBoxStyled>
          </Col>
          <Col xs={12} md={4} lg={4}>
            <AlignBoxStyled horizontalAlign="center">
              <NumberBox type={"tertiary"} title="Total investido">
                189
              </NumberBox>
            </AlignBoxStyled>
          </Col>
        </Row>
      </Grid>
      <Separator type="section" />
    </>
  );
};
