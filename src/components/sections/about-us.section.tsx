import React from "react";
import { TextBoxStyled } from "../about-us-text-section.component.style";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Separator } from "../separator.component.style";
import { Body, H1, H2, H3 } from "../typography";
import { Reveal } from "react-reveal";

export const AboutUs: React.FC = () => {
  return (
    <>
      <Separator type="section" />
      <Reveal>
        <Grid>
          <Row>
            <Col xs={12} md={10} lg={10} mdOffset={1}>
              <TextBoxStyled>
                <H3>Nossa missão</H3>
                <H2>Sobre a Poli Angels</H2>
                <Body>
                  O sucesso das startups é o nosso sucesso. Vamos além do
                  capital. Apoiamos os empreendedores com a experiência dos
                  nossos investidores associados. ganharam com seus anos de
                  mercado. Obtenha as conexões certas para o sucesso da sua
                  empresa.
                </Body>
              </TextBoxStyled>
            </Col>
          </Row>
        </Grid>
      </Reveal>
      <Separator type="section" />
    </>
  );
};
