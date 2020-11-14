import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const MAX_DEG = 20;

const TiltStyled = styled.div`
  pointer-events: none;
  transition: 100ms linear transform;
  transform: rotateX(${props => {

    if (props.y === undefined) {
      return 0;
    }
  
    const yPositive = props.y > props.height / 2 ? -1 : 1;
    const yHalf = props.height / 2;
    return Math.abs((yHalf - props.y) / yHalf) * MAX_DEG * yPositive;

  }}deg)
  rotateY(${props => {
    if (props.x === undefined) {
      return 0;
    }

    const xPositive = props.x > props.width / 2 ? 1 : -1;
    const xHalf = props.width / 2;
    return Math.abs((xHalf - props.x) / xHalf) * MAX_DEG * xPositive;

  }}deg);
  
`;

const ShadowStyled = styled.div`
  box-shadow: 0px 0px ${props => props.x ? '60px' : '0px'} 0px rgba(0,0,0,0.3);
  transform: scale(${props => props.x ? 1.05 : 1});
  transition: box-shadow 0.3s ease-in-out, transform 0.5s ease-in-out;
`;

export const Tilt = props => {

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setWidth(rect.width);
    setHeight(rect.height);
    setX(event.clientX - rect.x);
    setY(event.clientY - rect.y);
  };

  const handleMouseLeave = () => {
    setY(undefined);
    setX(undefined);
  };

  const { children } = props;
  return (
    <div
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
    >
      <TiltStyled height={height} width={width} x={x} y={y}>
        <ShadowStyled x={x}>
          {children}
        </ShadowStyled>
      </TiltStyled>
    </div>
    
  );
};

Tilt.propTypes = {
  children: PropTypes.any,
};

Tilt.defaultProps = {
  children: undefined,
};

