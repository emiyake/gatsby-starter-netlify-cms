import styled from "styled-components";
import { Col as FlexCol, Grid as FlexGrid } from "react-flexbox-grid";
import { Spacing } from "./constants";

interface ColProps {
  hAlign?: string;
}

export const Col = styled(FlexCol)`
  ${(props: ColProps) => props.hAlign ? `text-align: ${props.hAlign}` : ''};
`;

export const Grid = styled(FlexGrid)`
  padding: 0 32px;
`;
