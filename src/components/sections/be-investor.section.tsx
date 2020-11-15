import React from "react";
import { Body, H1 } from "../typography";
import { SectionWrapperStyled } from "../section-wrapper.component.style";
import { Separator } from "../separator.component.style";
import { Col, Grid, Row } from "react-flexbox-grid";
import { Reveal } from "react-reveal";
import { ImageBoxInvestor } from "../image-box-investor.component";
import { CardFrame } from "./card-frame.component";
import { Image } from "../image.component";

export const BeInvestor: React.FC = () => {
  return (
    <>
      <Separator type="section" />
      <Grid>
        <Row between="xs" middle="xs">
          <Col xs={12} md={5}>
            <Reveal bottom>
              <CardFrame noPadding={true} noBorder={true}>
                <Image.BeInvestor />
              </CardFrame>
              
            </Reveal>
          </Col>
          <Col xs={12} md={5}>
            <SectionWrapperStyled>
              <Reveal bottom cascade>
                <H1>
                  Seja <br /> um investidor
                </H1>
                <Separator type="subsection" />
                <Body>
                  Se assim como nós, você também é apaixonado por inovação e
                  empreendedorismo e deseja fazer parte dos negócios do futuro
                  do país, venha fazer parte da Poli Angels.
                </Body>
              </Reveal>
            </SectionWrapperStyled>
          </Col>

          
        </Row>
      </Grid>
      <Separator type="section" />
    </>
  );
};
