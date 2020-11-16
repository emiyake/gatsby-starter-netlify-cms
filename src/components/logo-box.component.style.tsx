import styled from "styled-components";
import { Spacing } from "./constants";

export const LogoBoxStyled = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  filter: saturate(0);
  transition: all 0.4s ease;
  padding: ${Spacing.Medium};

  &:hover {
    filter: saturate(1);
    transform: scale(1.1);
  }
`;