import React from "react";
import { Body, H1 } from "../typography";
import { Separator } from "../separator.component.style";
import { Grid, Row } from "react-flexbox-grid";
import { Reveal } from "react-reveal";
import { CardFrame } from "./card-frame.component";
import { Image } from "../image.component";
import { ImageIcon } from "../image-icon.component";
import { Col } from "../grid";
import { H2, H3 } from "../typography";
import { SectionStyled } from "./section.component.style";
import { Button } from "../buttton.component";

export const BeInvestor: React.FC = () => {
  return (
    <SectionStyled>
      <Grid>
        <Row between="xs" middle="xs">
          <Col xs={12} md={4}>
            <Reveal bottom>
              <CardFrame noPadding={true} noBorder={true}>
                <Image.BeInvestor />
              </CardFrame>
          
            </Reveal>
          </Col>
          <Col xs={12} md={6}>
            <Reveal bottom cascade>
              <H1>
                Seja <br /> um investidor
              </H1>
              <Body>
                Se assim como nós, você também é apaixonado por inovação e
                empreendedorismo e deseja fazer parte dos negócios do futuro
                do país, venha fazer parte da Poli Angels.
              </Body>
              <Separator type="subsection" />
              <Button href="https://gust.com/accounts/group_member_application/new?investor_group_id=poliangels" target="_blank">
                Associe-se aqui
              </Button>
            </Reveal>
          </Col>
        </Row>
        <Separator type="section" />
        <Row>
          <Col xs={12} hAlign="center">
            <H2>O que oferecemos</H2>
          </Col>
          <Col xs={12} md={4} hAlign="center">
            <Reveal bottom cascade>
              <ImageIcon.Networking />
              <H3>Conexão</H3>
              <Body>Conecte-se com os principais formadores de opinião no mundo do investimento e Startups. Aqui você encontra uma vasta rede de investidores e empreendedores</Body>
            </Reveal>
          </Col>
          <Col xs={12} md={4} hAlign="center">
            <Reveal bottom cascade>
              <ImageIcon.Event />
              <H3>Eventos</H3>
              <Body>Participe de eventos presenciais e online com investidores e empreendedores. Tenha acesso a conteúdos exclusivos sobre empreendedorismo.</Body>
            </Reveal>
          </Col>
          <Col xs={12} md={4} hAlign="center">
            <Reveal bottom cascade>
              <ImageIcon.Deal />
              <H3>Oportunidades</H3>
              <Body>Invista em startups com potenciais de crescimento. Com um grupo criterioso de investidores, maximizamos as chances de sucesso.</Body>
            </Reveal>
          </Col>
        </Row>
      </Grid>
    </SectionStyled>
  );
};
