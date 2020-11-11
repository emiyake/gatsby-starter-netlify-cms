import styled, { keyframes } from "styled-components";

export const FadeBottom = keyframes`
  from {
    transform: TranslateY(100px);
  }

  to {
    transform: TranslateY(0);
  }
`;

export const FadeTop = keyframes`
  from {
    transform: TranslateY(-100px);
  }

  to {
    transform: TranslateY(0);
  }
`;

export const FadeDirection = {
  bottom: FadeBottom,
  top: FadeTop, 
}

export const Reveal = keyframes`
  from {
    opacity: 0;
  }

  to {
    transform: 100%;
  }
`;

interface FadeProps {
    direction: "bottom" | "left" | "right" | "top";
  }
  export const FadeImageBoxStyled = styled.div<FadeProps>`
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display: inline-block;
    animation: ${props => props.direction ? FadeDirection[props.direction]: FadeTop} 1s ease;
    padding: 2rem 1rem;
    font-size: 1.2rem;
  `;
