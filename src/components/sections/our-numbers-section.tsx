import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { NumberBox } from "../number-display.component";
import { AlignBoxStyled } from "../number-display.component.style";
import { Separator } from "../separator.component.style";
import { H1 } from "../typography";
import { Reveal } from "react-reveal";
import CountUp from "react-countup";

export const OurNumbers: React.FC = () => {
  return (
    <>
      <Separator type="section" />
      <Grid>
        <Row>
          <Col>
            <Reveal bottom>
              <H1>
                Nossos <br />
                números
              </H1>
            </Reveal>
          </Col>
        </Row>
        <Row center="xs">
          <Col xs={12} md={4} lg={4}>
            <AlignBoxStyled horizontalAlign="center">
              <Reveal bottom>
                <NumberBox type={"tertiary"} title="Número de rounds">
                  <CountUp start={0} end={8} duration={4} useEasing={true} />
                </NumberBox>
              </Reveal>
            </AlignBoxStyled>
          </Col>
          <Col xs={12} md={4} lg={4}>
            <AlignBoxStyled horizontalAlign="center">
              <Reveal>
                <NumberBox type={"secondary"} title="Número de investidores">
                  <CountUp start={0} end={17} duration={4} useEasing={true} />
                </NumberBox>
              </Reveal>
            </AlignBoxStyled>
          </Col>
          <Col xs={12} md={4} lg={4}>
            <AlignBoxStyled horizontalAlign="center">
              <Reveal>
                <NumberBox type={"tertiary"} title="Milhões investidos">
                  <CountUp start={0} end={187} duration={4} useEasing={true} />
                </NumberBox>
              </Reveal>
            </AlignBoxStyled>
          </Col>
        </Row>
      </Grid>
      <Separator type="section" />
    </>
  );
};
