import React from "react";
import { Col, Row } from "react-flexbox-grid";
import { Reveal } from "react-reveal";
import { Hbox } from "../hbox.component";
import { Image } from "../image.component";
import { Separator } from "../separator.component.style";
import { H1 } from "../typography";
import { CardFrame } from "./card-frame.component";
import { SectionStyled } from "./section.component.style";
import { Grid } from "../grid";
import { Link } from "../link.component.style";
import { NoEffectsCardFrame } from "./no-effects-card-frame.component";

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
              <NoEffectsCardFrame>
                <Hbox>
                  <Hbox.Item hAlign="center" vAlign="center">
                    <Link target="blank" href="https://gptw.com.br/">
                      <Image.PartnerGreat />
                    </Link>
                  </Hbox.Item>
                  <Hbox.Separator />
                  <Hbox.Item hAlign="center" vAlign="center">
                    <Link
                      target="blank"
                      href="https://taqtile.com.br/"
                    >
                      <Image.PartnerTaqtile />
                    </Link>
                  </Hbox.Item>
                  <Hbox.Separator />
                  <Hbox.Item hAlign="center" vAlign="center">
                    <Link target="blank" href="http://www.veof.com.br/">
                      <Image.PartnerVianna />
                    </Link>
                  </Hbox.Item>
                </Hbox>
              </NoEffectsCardFrame>
            </Reveal>
          </Col>
        </Row>
      </Grid>
    </SectionStyled>
  );
};
