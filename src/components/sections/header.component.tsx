import React from "react";
import { Col, Grid, Row } from "react-flexbox-grid";
import { Image } from "../image.component";
import { Separator } from "../separator.component.style";
import { HeaderWrapperStyled } from "./header.component.styled";

export const Header = () => {
  return (
    <HeaderWrapperStyled>
      <Separator type="subsection"/>
      <Grid>
        <Row>
          <Col xs={12}>
            <Image.LogoPoliAngels />
          </Col>
        </Row>
      </Grid>
    </HeaderWrapperStyled>
  )
}