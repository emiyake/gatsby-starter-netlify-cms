import React from "react";
import { Hbox } from "./hbox.component";
import { ListBoxStyled, ListItemStyled } from "./list-box.component.style";
import { Body, H4 } from "./typography";

const Fade = require("react-reveal/Fade");

export const ListBox: React.FC = () => {
  return (
    <ListBoxStyled>
      <Fade right cascade>
        <ListItemStyled>
        <Hbox vAlign="center">
          <H4>Inscrição</H4>
            <Body>Acesso à experiência dos investidores associados;</Body>
        </Hbox>
        </ListItemStyled>
        <ListItemStyled>
          <Body>Acesso à experiência dos investidores associados;</Body>
        </ListItemStyled>
        <ListItemStyled>
          <Body>Acesso à experiência dos investidores associados;</Body>
        </ListItemStyled>
        <ListItemStyled>
          <Body>Acesso à experiência dos investidores associados;</Body>
        </ListItemStyled>
        <ListItemStyled>
          <Body>Acesso à experiência dos investidores associados;</Body>
        </ListItemStyled>
      </Fade>
    </ListBoxStyled>
  );
};
