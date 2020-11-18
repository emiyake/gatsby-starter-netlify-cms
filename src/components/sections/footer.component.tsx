import React from "react";
import { FooterWrapperStyled } from "./footer.component.style";
import { Col, Row } from "react-flexbox-grid";
import { BodySecondary, H3 } from "../typography";
import { ImageIcon } from "../image-icon.component";
import { Hbox } from "../hbox.component";
import { Separator } from "../separator.component.style";
import { Link } from "../link.component.style";
import { Image } from "../image.component";
import { Grid } from "../grid";

export const Footer = () => {
  return (
    <FooterWrapperStyled>
      <Grid>
        <Row>
          <Col xs={12} sm={2}>
            <Image.LogoWhite />
          </Col>
          <Separator type="subsection" />
          <Col xs={12} sm={7}>
            <H3>Fale conosco</H3>
            <Hbox>
              <Hbox.Item noGrow={true} vAlign='center'>
                <ImageIcon.Location />
              </Hbox.Item>
              <Hbox.Separator />
              <Hbox.Item>
                <BodySecondary>R. Joaquim Floriano 72, conjunto 193 sala 7<br/> 04534-000, Itam Bibi São Paulo SP</BodySecondary>
              </Hbox.Item>
            </Hbox>
            {/* <Separator />
            <Hbox>
              <Hbox.Item noGrow={true} vAlign='center'>
                <ImageIcon.Phone />
              </Hbox.Item>
              <Hbox.Separator />
              <Hbox.Item>
                <BodySecondary>+55 11 9 7638-1777 / +55 11 3145-3709</BodySecondary>
              </Hbox.Item>
            </Hbox> */}
            <Separator />
            <Hbox>
              <Hbox.Item noGrow={true} vAlign='center'>
                <ImageIcon.Mail />
              </Hbox.Item>
              <Hbox.Separator />
              <Hbox.Item>
                <Link href="mailto:contato@poliangels.com.br">
                  <BodySecondary>contato@poliangels.com.br​</BodySecondary>
                </Link>
              </Hbox.Item>
            </Hbox>
            <Separator type="subsection" />
          </Col>
          <Col xs={12} sm={3}>
            <H3>Siga nossas redes</H3>
            <Hbox>
              <Hbox.Item noGrow={true}>
                <Link href="https://www.instagram.com/poliangels" target="_blank">
                  <ImageIcon.Instagram />
                </Link>
              </Hbox.Item>
              <Hbox.Separator />
              <Hbox.Item noGrow={true}>
                <Link href="https://www.linkedin.com/company/poli-angels/" target="_blank">
                  <ImageIcon.Linkedin />
                </Link>
              </Hbox.Item>
              <Hbox.Separator />
              <Hbox.Item noGrow={true}>
                <Link href="https://www.youtube.com/channel/UCjgQsLwr0nOM2gbTxxcH5lA" target="_blank">
                  <ImageIcon.Youtube />
                </Link>
              </Hbox.Item>
              <Hbox.Separator />
            </Hbox>
            <Separator type="subsection" />
          </Col>
        </Row>
        <Row center='xs'>
          <Col>Desenvolvido por <Link  target="blank" href="https://instituto-taqtile.netlify.app/">Instituto Taqtile</Link> @ 2020</Col>
        </Row>
      </Grid>

    </FooterWrapperStyled>
  )
};
