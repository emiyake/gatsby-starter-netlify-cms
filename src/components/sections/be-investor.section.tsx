import React from "react";
import { ImageBox } from "../image-box.component";
import { Body, H1, H2, H3 } from "../typography";
import investorFrontImage from "../../img/img-investor-primary.jpg";
import investorBackImage from "../../img/img-investor-secondary.png";
import { SectionWrapperStyled } from "../section-wrapper.component.style";
import { Separator } from "../separator.component.style";
import { ImageBoxSizingStyled } from "../image-box.component.style";
import { Col, Grid, Row } from "react-flexbox-grid";

export const BeInvestor: React.FC = () => {
  return (
    <>
    <Separator type="section" />
      <Grid>
      <Row between="xs" middle="sm" around="xs">
          <Col xs={12} md={6} lg={5} >
            <SectionWrapperStyled>
              <H1>
                Seja <br /> um investidor
              </H1>
              <Separator type="content" />
              <Body>
                Se assim como nós, você também é apaixonado por inovação e
                empreendedorismo e deseja fazer parte dos negócios do futuro do
                país, venha fazer parte da Poli Angels.
              </Body>
            </SectionWrapperStyled>
          </Col>

          <Col xs={12} md={6} lg={5}>
              <ImageBox
                frontImageUrl={investorFrontImage}
                backImageUrl={investorBackImage}
                solidBackground={true}
              />
          </Col>
        </Row>
      </Grid>
      <Separator type="section" />
    </>
  );
};
