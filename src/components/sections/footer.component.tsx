import React from "react";
import { FooterWrapperStyled } from "./footer.component.style";
import { Col, Grid, Row } from "react-flexbox-grid";
import { H3 } from "../typography";
import { ImageIcon } from "../image-icon.component";

export const Footer = () => {
  return (
    <FooterWrapperStyled>
      <Grid>
        <Row>
          <Col xs={12} sm={2}>
          </Col>
          <Col xs={12} sm={7}>
            <H3>Fale conosco</H3>
            <ImageIcon.Location />
          </Col>
          <Col xs={12} sm={3}>
            <H3>Siga nossas redes</H3>
          </Col>
        </Row>
      </Grid>

    </FooterWrapperStyled>
  )
};
