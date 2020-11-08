import React from "react";
import { Image } from "./image.component";
import {
  ListBoxStyled,
  ListBoxTextAreaStyled,
} from "./list-box.component.style";
import { Body } from "./typography";

export const ListBox: React.FC = () => {
  return (
    <ListBoxStyled>
      <ListBoxTextAreaStyled sort="first">
        <Body>
            Acesso à experiência dos investidores associados;
        </Body>
      </ListBoxTextAreaStyled>
      <ListBoxTextAreaStyled sort="second">
      <Body>
            Acesso à experiência dos investidores associados;
        </Body>
      </ListBoxTextAreaStyled>
      <ListBoxTextAreaStyled sort="third"> 
      <Body>
            Acesso à experiência dos investidores associados;
        </Body>
      </ListBoxTextAreaStyled>
    </ListBoxStyled>
  );
};
