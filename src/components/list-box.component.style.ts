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
  background: url(${inclinedListImage}) left center no-repeat;
  background-size: 40% auto;
  @media (max-width: ${Breakpoint.Mobile}) {
    background: url(${verticalList}) left center no-repeat;
    background-size: 40% auto;
  }
`;

interface ListBoxTextAreaProps {
  sort?: "first" | "second" | "third";
}

enum ItemPadding {
  first = "30%",
  second = "35%",
  third = "40%",
}

export const ListBoxTextAreaStyled = styled.div<ListBoxTextAreaProps>`
  display: flex;
  height: 100px;
  width: 100%;
  padding-left: ${(props) => (props.sort ? ItemPadding[props.sort] : "0")};
  @media (max-width: ${Breakpoint.Mobile}) {
    padding-left: ${ItemPadding.third};
  }
`;
