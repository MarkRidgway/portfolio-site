import React from 'react';
import styled from 'styled-components';
import SVGWingLeft from './left.svg';
import SVGWingRight from './right.svg';

const Wing = styled.div`
  flex: 1 0 auto;
  display: none;
  max-width: 5em;

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    display: block;
  }

  img{
    max-width: 100%;
    width: 100%;
    height: auto;
    margin: 0;
  }
`;

const WingLeft = () => (
  <Wing>
    <img src={ SVGWingLeft } />
  </Wing>
)

const WingRight = () => (
  <Wing>
    <img src={ SVGWingRight } />
  </Wing>
)

export default { WingLeft, WingRight };
