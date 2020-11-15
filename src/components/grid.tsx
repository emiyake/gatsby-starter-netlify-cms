import styled from "styled-components";
import { Col as FlexCol } from "react-flexbox-grid";

interface ColProps {
  hAlign?: string;
}

export const Col = styled(FlexCol)`
  ${(props: ColProps) => props.hAlign ? `text-align: ${props.hAlign}` : ''};
`;