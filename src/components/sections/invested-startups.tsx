import React from "react";
import { Row } from "react-flexbox-grid";
import { H2 } from "../typography";
import { Image } from "../image.component";
import { Separator } from "../separator.component.style";
import { SectionStyled } from "./section.component.style";
import { Col } from "../grid";
import { Zoom } from "react-reveal";
import { Grid } from "../grid";
import { LogoBoxStyled } from "../logo-box.component.style";

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
            <Col xs={12} sm={3}>
              <LogoBoxStyled>
                <Image.LogoAgriConnected />
              </LogoBoxStyled>
              <Separator type="subsection"/>
            </Col>
            <Col xs={12} sm={3}>
              <LogoBoxStyled>
                <Image.LogoIdgeo />
              </LogoBoxStyled>
              <Separator type="subsection"/>
            </Col>
            <Col xs={12} sm={3}>
              <LogoBoxStyled>
                <Image.LogoBebidaNaPorta />
              </LogoBoxStyled>
              <Separator type="subsection"/>
            </Col>
            <Col xs={12} sm={3}>
              <LogoBoxStyled>
                <Image.LogoWorc />
              </LogoBoxStyled>
              <Separator type="subsection"/>
            </Col>
          </Row>
          <Row center="xs">
            <Col xs={12} sm={3}>
              <LogoBoxStyled>
                <Image.LogoOnTheGo />
              </LogoBoxStyled>
              <Separator type="subsection"/>
            </Col>
            <Col xs={12} sm={5}>
              <LogoBoxStyled>
                <Image.LogoSourceLevel />
              </LogoBoxStyled>
              <Separator type="subsection"/>
            </Col>
            <Col xs={12} sm={3}>
              <LogoBoxStyled>
                <Image.LogoBynd />
              </LogoBoxStyled>
              <Separator type="subsection"/>
            </Col>
          </Row>
        </Zoom>
      </Grid>
    </SectionStyled>
  );
};
