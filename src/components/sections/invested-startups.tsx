import React from "react";
import { Grid, Row } from "react-flexbox-grid";
import { H2 } from "../typography";
import { Image } from "../image.component";
import { Separator } from "../separator.component.style";
import { SectionStyled } from "./section.component.style";
import { Col } from "../grid";
import { Zoom } from "react-reveal";

export const InvestedStartups = () => {
  return (
    <SectionStyled>
      <Grid>
        <Row>
          <Col xs={12} hAlign="center">
            <H2 box={true}>Startups investidas</H2>
          </Col>
        </Row>
        <Separator type="subsection" />
        <Zoom cascade>
          <Row center="xs">
            <Col xs={6} sm={3}>
              <Image.LogoAgriConnected />
              <Separator type="subsection"/>
            </Col>
            <Col xs={6} sm={3}>
              <Image.LogoIdgeo />
              <Separator type="subsection"/>
            </Col>
            <Col xs={6} sm={3}>
              <Image.LogoBebidaNaPorta />
              <Separator type="subsection"/>
            </Col>
            <Col xs={6} sm={3}>
              <Image.LogoWorc />
              <Separator type="subsection"/>
            </Col>
          </Row>
          <Row center="xs">
            <Col xs={6} sm={3}>
              <Image.LogoOnTheGo />
              <Separator type="subsection"/>
            </Col>
            <Col xs={6} sm={3}>
              <Image.LogoSourceLevel />
              <Separator type="subsection"/>
            </Col>
            <Col xs={6} sm={3}>
              <Image.LogoBynd />
              <Separator type="subsection"/>
            </Col>
          </Row>
        </Zoom>
      </Grid>
    </SectionStyled>
  );
};
