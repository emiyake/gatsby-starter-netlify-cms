import styled from "styled-components";
import { Spacing } from "./constants";

interface SeparatorProps {
  type?: "content" | "section" | "icon";
}

const SeparatorSize = {
  section: Spacing.XLarge,
  content: Spacing.Small,
  icon: Spacing.Small,
};

export const Separator = styled.div<SeparatorProps>`
  padding-right: ${(props) =>
    props.type ? SeparatorSize[props.type] : Spacing.XSmall};
  padding-top: ${(props) =>
    props.type ? SeparatorSize[props.type] : Spacing.XSmall};
`;

