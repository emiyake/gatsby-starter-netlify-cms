import React from "react";
import { Hbox } from "./hbox.component";
import {
  ListBoxStyled,
  ListIconWrapperStyled,
  ListItemStyled,
} from "./list-box.component.style";
import { Separator } from "./separator.component.style";
import { Body, H3 } from "./typography";
import { Image } from "./image.component";
import { Link } from "./link.component";

const Fade = require("react-reveal/Fade");

export const ListBox: React.FC = () => {
  return (
    <ListBoxStyled>
      <Fade right cascade>
        <ListItemStyled>
          <Hbox>
            <ListIconWrapperStyled>
              <Image.Subscription />
            </ListIconWrapperStyled>
            <Hbox.Item vAlign="center">
              <H3>Inscrição</H3>
              <Body>
                As startups se inscrevem para participar do processo através da
                plataforma <Link href="http://gust.com/pt-BR">GUST</Link>
              </Body>
              <Separator type="content" />
            </Hbox.Item>
          </Hbox>
        </ListItemStyled>
        <ListItemStyled>
          <Hbox>
            <ListIconWrapperStyled>
              <Image.pitch />
            </ListIconWrapperStyled>
            <Hbox.Item vAlign="center">
              <H3>Pitch</H3>
              <Body>
                São realizadas 6 reuniões plenárias (rounds) presenciais ou por
                videoconferência, para a apresentação das startups.
              </Body>
              <Separator type="content" />
            </Hbox.Item>
          </Hbox>
        </ListItemStyled>
        <ListItemStyled>
          <Hbox>
            <ListIconWrapperStyled>
              <Image.committee />
            </ListIconWrapperStyled>
            <Hbox.Item vAlign="center">
              <H3>Comitê de seleção</H3>
              <Body>
                São realizadas 6 reuniões plenárias (rounds) presenciais ou por
                videoconferência, para a apresentação das startups.
              </Body>
              <Separator type="content" />
            </Hbox.Item>
          </Hbox>
        </ListItemStyled>
        <ListItemStyled>
          <Hbox>
            <ListIconWrapperStyled>
              <Image.interview />
            </ListIconWrapperStyled>
            <Hbox.Item vAlign="center">
              <H3>Entrevista</H3>
              <Body>
                Os investidores conhecerão os empreendedores, a solução, o
                modelo de negócio, a escalabilidade e o mercado endereçado
              </Body>
              <Separator type="content" />
            </Hbox.Item>
          </Hbox>
        </ListItemStyled>
        <ListItemStyled>
          <Hbox>
            <ListIconWrapperStyled>
              <Image.investment />
            </ListIconWrapperStyled>
            <Hbox.Item vAlign="center">
              <H3>Investimento</H3>
              <Body>
                O empreendedor recebe mentoria e investimento de capital. Os
                recursos são provenientes por cada investidor, de acordo com seu
                capital próprio
              </Body>
              <Separator type="content" />
            </Hbox.Item>
          </Hbox>
        </ListItemStyled>
      </Fade>
    </ListBoxStyled>
  );
};
