import React from "react";
import { Col, Grid, Row } from "react-flexbox-grid";
import { Reveal } from "react-reveal";
import { Hbox } from "../hbox.component";
import { Image } from "../image.component";
import { Separator } from "../separator.component.style";
import { H1 } from "../typography";
import { CardFrame } from "./card-frame.component";
import { SectionStyled } from "./section.component.style";

export const PartnerSection = () => {
  return (
    <SectionStyled>
      <Grid>
        <Row>
          <Col xs={12} sm={4}>
            <Reveal bottom>
              <H1>
                Nossos <br /> parceiros
              </H1>
            </Reveal>
            <Separator type="subsection" />
          </Col>
          <Col xs={12} smOffset={1} sm={7}>
            <Reveal bottom>
              <CardFrame>
                <Hbox>
                  <Hbox.Item hAlign="center" vAlign="center">
                    <Image.PartnerGreat />
                  </Hbox.Item>
                  <Hbox.Separator />
                  <Hbox.Item hAlign="center" vAlign="center">
                    <Image.PartnerTaqtile />
                  </Hbox.Item>
                  <Hbox.Separator />
                  <Hbox.Item hAlign="center" vAlign="center">
                    <Image.PartnerVianna />
                  </Hbox.Item>
                </Hbox>
              </CardFrame>
            </Reveal>
          </Col>
        </Row>
      </Grid>
    </SectionStyled>
  );
};
