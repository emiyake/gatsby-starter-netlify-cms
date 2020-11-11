import React from "react";
import { Image } from "./image.component";
import {
  ListBoxStyled,
  ListBoxTextAreaStyled,
} from "./list-box.component.style";
import { Body } from "./typography";

const Fade = require("react-reveal/Fade");

export const ListBox: React.FC = () => {
  return (
    <ListBoxStyled>
      <Fade right cascade>
        <ListBoxTextAreaStyled sort="first">
          <Body>Acesso à experiência dos investidores associados;</Body>
        </ListBoxTextAreaStyled>
        <ListBoxTextAreaStyled sort="second">
          <Body>Acesso à experiência dos investidores associados;</Body>
        </ListBoxTextAreaStyled>
        <ListBoxTextAreaStyled sort="third">
          <Body>Acesso à experiência dos investidores associados;</Body>
        </ListBoxTextAreaStyled>
      </Fade>
    </ListBoxStyled>
  );
};
