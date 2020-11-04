import React from "react";
import { BoxStyled, HeroStyled } from "./hero.component.style";
import logo from "../img/logo.svg";
import { Link } from "gatsby";
import { H1, H2 } from "../typography";
import { Col, Grid, Row } from "../grid";

export const Hero: React.FC = () => {
  return (
    <HeroStyled>
            <Grid>
              <Row>
                <Col>
                
                </Col>
              </Row>
            </Grid>
            <H1>Investimos em statups.</H1>
            <H2>Fomentamos o empreendedorismo brasileiro através do
              empreendedorismo</H2>
    </HeroStyled>
  );
};
