import styled from "styled-components";
import { Radius, Color, Spacing } from "../constants";

export const TiltFrameStyled = styled.div`
  box-shadow: 0 100px 80px rgba(0, 0, 0, 0.12);
  border-radius: ${Radius.Large};
  display: flex;
  justify-content: space-around;
  background-color: ${Color.White};
  padding: ${Spacing.Large};
`;
