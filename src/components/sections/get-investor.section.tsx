import React from "react";
import { Col, Grid, Row } from "react-flexbox-grid";
import { Body, H1, H2, H3 } from "../typography";
import investorFrontImage from "../../img/img-investor-primary.jpg";
import investorBackImage from "../../img/img-investor-secondary.png";
import { ImageBox } from "../image-box.component";
import { Separator } from "../separator.component.style";
import { Fade, Reveal } from "react-reveal";
import { Hbox } from "../hbox.component";
import { Button } from "./buttton.component";

import { Image } from "../image.component" 
import { Link } from "../link.component.style";

export const GetInvestment: React.FC = () => {
  return (
    <>
      <Separator type="section" />
      <Grid>
        <Row between="xs" middle="sm" around="xs" reverse={true}>
          <Col xs={12} md={6} lg={5}>
            <ImageBox
              frontImageUrl={investorFrontImage}
              backImageUrl={investorBackImage}
              solidBackground={false}
              alignFrontRight={true}
            />
          </Col>
          <Col xs={12} md={6} lg={5}>
            <Reveal bottom cascade>
              <H1>Receba investimentos</H1>
              <Body>
                Vamos além do capital. Apoiamos os empreendedores com a
                experiência dos investidores associados. Obtenha as conexões
                certas para o sucesso da sua startup.
              </Body>
            </Reveal>
          </Col>
        </Row>
      </Grid>
      <Separator type="section" />
      <Grid>
        <Row between="xs" middle="sm" around="xs">
          <Col xs={12} md={12} lg={4}>
            <Fade bottom>
                <Hbox.Item>
                  <H2>Inscreva sua startup</H2>
                </Hbox.Item>
                <Hbox.Item>
                  <Body>
                    Tenha acesso a centenas de investidores, com vasta
                    experiência no mercado e com uma forte de rede de
                    relacionamentos.
                  </Body>
                  <Separator type="line" />
                  <Button>
                    Inscreva-se aqui  
                  </Button>
                </Hbox.Item>
              
            </Fade>
          </Col>
          <Col xs={12} md={12} lg={8}>
            <Fade right cascade>
              <Hbox>
                <Hbox.Item noGrow={true} vAlign='center'>
                  <Image.Subscription />
                </Hbox.Item>
                <Hbox.Separator />
                <Hbox.Item vAlign="center">
                  <H3>Inscrição</H3>
                  <Body>
                    As startups se inscrevem para participar do processo através da
                    plataforma <Link target="_blank" href="https://gust.com/pt-BR">GUST</Link>
                  </Body>
                  <Separator type="line" />
                </Hbox.Item>
              </Hbox>
              <Hbox>
                <Hbox.Item noGrow={true} vAlign='center'>
                  <Image.Pitch />
                </Hbox.Item>
                <Hbox.Separator />
                <Hbox.Item vAlign="center">
                  <H3>Pitch</H3>
                  <Body>
                    São realizadas 6 reuniões plenárias (rounds) presenciais ou por
                    videoconferência, para a apresentação das startups.
                  </Body>
                  <Separator type="line" />
                </Hbox.Item>
              </Hbox>
              <Hbox>
                <Hbox.Item noGrow={true} vAlign='center'>
                  <Image.committee />
                </Hbox.Item>
                <Hbox.Separator />
                <Hbox.Item vAlign="center">
                  <H3>Comitê de seleção</H3>
                  <Body>
                    São realizadas 6 reuniões plenárias (rounds) presenciais ou por
                    videoconferência, para a apresentação das startups.
                  </Body>
                  <Separator type="line" />
                </Hbox.Item>
              </Hbox>
              <Hbox>
                <Hbox.Item noGrow={true} vAlign='center'>
                  <Image.Interview />
                </Hbox.Item>
                <Hbox.Separator />
                <Hbox.Item vAlign="center">
                  <H3>Entrevista</H3>
                  <Body>
                    Os investidores conhecerão os empreendedores, a solução, o
                    modelo de negócio, a escalabilidade e o mercado endereçado
                  </Body>
                  <Separator type="line" />
                </Hbox.Item>
              </Hbox>
              <Hbox>
                <Hbox.Item noGrow={true} vAlign='center'>
                  <Image.Investment />
                </Hbox.Item>
                <Hbox.Separator />
                <Hbox.Item vAlign="center">
                  <H3>Investimento</H3>
                  <Body>
                    O empreendedor recebe mentoria e investimento de capital. Os
                    recursos são provenientes por cada investidor, de acordo com seu
                    capital próprio
                  </Body>
                  <Separator type="line" />
                </Hbox.Item>
              </Hbox>
            </Fade>
          </Col>
        </Row>
      </Grid>
      <Separator type="section" />
    </>
  );
};
