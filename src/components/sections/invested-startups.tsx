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
import { Link } from "../link.component.style";

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
                <Link target="blank" href="https://www.agriconnected.com/">
                  <Image.LogoAgriConnected />
                </Link>
              </LogoBoxStyled>
              <Separator type="subsection" />
            </Col>
            <Col xs={12} sm={3}>
              <LogoBoxStyled>
                <Link target="blank" href="https://www.agriconnected.com/">
                  <Image.LogoIdgeo />
                </Link>
              </LogoBoxStyled>
              <Separator type="subsection" />
            </Col>
            <Col xs={12} sm={3}>
              <LogoBoxStyled>
                <Link target="blank" href="https://www.bebidanaporta.com/">
                  <Image.LogoBebidaNaPorta />
                </Link>
              </LogoBoxStyled>
              <Separator type="subsection" />
            </Col>
            <Col xs={12} sm={3}>
              <LogoBoxStyled>
                <Link target="blank" href="https://www.worc.com.br/">
                  <Image.LogoWorc />
                </Link>
              </LogoBoxStyled>
              <Separator type="subsection" />
            </Col>
          </Row>
          <Row center="xs">
            <Col xs={12} sm={3}>
              <LogoBoxStyled>
                <Link target="blank" href="https://www.onthego.com.br/">
                  <Image.LogoOnTheGo />
                </Link>
              </LogoBoxStyled>
              <Separator type="subsection" />
            </Col>
            <Col xs={12} sm={5}>
              <LogoBoxStyled>
                <Link target="blank" href="https://sourcelevel.io/">
                  <Image.LogoSourceLevel />
                </Link>
              </LogoBoxStyled>
              <Separator type="subsection" />
            </Col>
            <Col xs={12} sm={3}>
              <LogoBoxStyled>
                <Link target="blank" href="https://bynd.com.br/">
                  <Image.LogoBynd />
                </Link>
              </LogoBoxStyled>
              <Separator type="subsection" />
            </Col>
          </Row>
        </Zoom>
      </Grid>
    </SectionStyled>
  );
};
