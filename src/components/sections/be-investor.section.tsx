import React from "react";
import { ImageBox } from "../image-box.component";
import { Body, H1, H2, H3 } from "../typography";
import investorFrontImage from "../../img/img-investor-primary.jpg";
import investorBackImage from "../../img/img-investor-secondary.png";
import { SectionWrapperStyled } from "../section-wrapper.component.style";
import { Separator } from "../separator.component.style";
import { Col, Grid, Row } from "react-flexbox-grid";
import { Reveal } from "react-reveal";
import { ImageBoxInvestor } from "../image-box-investor.component";

export const BeInvestor: React.FC = () => {
  return (
    <>
      <Separator type="section" />
      <Grid>
        <Row between="xs" middle="sm" around="xs">
          <Col xs={12} md={6} lg={5}>
            <SectionWrapperStyled>
              <Reveal bottom cascade>
                <H1>
                  Seja <br /> um investidor
                </H1>
                <Separator type="content" />
                <Body>
                  Se assim como nós, você também é apaixonado por inovação e
                  empreendedorismo e deseja fazer parte dos negócios do futuro
                  do país, venha fazer parte da Poli Angels.
                </Body>
              </Reveal>
            </SectionWrapperStyled>
          </Col>

          <Col xs={12} md={6} lg={5}>
            <Reveal bottom>
            <ImageBoxInvestor
              frontImageUrl={investorFrontImage}
              backImageUrl={investorBackImage}
              solidBackground={true}
            />
            </Reveal>
          </Col>
        </Row>
      </Grid>
      <Separator type="section" />
    </>
  );
};
