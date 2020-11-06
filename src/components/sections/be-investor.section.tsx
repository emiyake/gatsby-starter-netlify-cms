import React from "react";
import { Col, Grid, Row } from "../grid";
import { ImageBox } from "../image-box.component";
import { Body, H1, H2, H3 } from "../typography";
import investorFrontImage from "../../img/img-investor-primary.jpg";
import investorBackImage from "../../img/img-investor-secondary.png";
import { SectionWrapperStyled } from "../section-wrapper.component.style";
import { Separator } from "../separator.component.style";
import { ImageBoxSizingStyled } from "../image-box.component.style";

// import { Container } from './styles';

export const BeInvestor: React.FC = () => {
  return (
    <>
    <Separator type="section" />
      <Grid>
        <Row verticalAlign="center">
          <Col desktop={6} tablet={6} mobile={12}>
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

          <Col desktop={6} tablet={6} mobile={12} horizontalAlign="center">
            <ImageBoxSizingStyled width="50%">
              <ImageBox
                frontImageUrl={investorFrontImage}
                backImageUrl={investorBackImage}
                solidBackground={true}
              />
            </ImageBoxSizingStyled>
          </Col>
        </Row>
      </Grid>
      <Separator type="section" />
    </>
  );
};
