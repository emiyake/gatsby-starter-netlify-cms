import styled from "styled-components";
import inclinedListImage from "../img/img-inclined-list.png";
import verticalList from "../img/img-vertical-list.png";
import { Breakpoint, ProportionalSpacing } from "./constants";

export const ListBoxStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 500px;
  width: 100%;
  @media (max-width: ${Breakpoint.Mobile}) {
    background: url(${verticalList}) left center no-repeat;
    background-size: 40% auto;
  }
`;

export const ListItemStyled = styled.div`
  border: 1px solid red;
  height: 100px;
`;




