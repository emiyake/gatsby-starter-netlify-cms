import styled from "styled-components";

import { Color, Spacing } from "../constants";
import { H3 } from "../typography";

export const FooterWrapperStyled = styled.div`
  background-color: ${Color.Black};
  padding: ${Spacing.Large} 0;
  color: ${Color.White};

  & ${H3} {
    color: ${Color.White};
  }
`;
