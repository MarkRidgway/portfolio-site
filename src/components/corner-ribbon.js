import React, { Component } from "react";
import styled from "styled-components";
import { lighten } from 'polished'

const Ribbon = styled.a`
  z-index: 100;
  display: block;
  width: 200px;
  position: absolute;
  top: 25px;
  right: -50px;
  color: #fff;
  font-family: Merriweather;
  text-align: center;
  line-height: 50px;
  letter-spacing: 1px;
  text-decoration: none;
  background: ${props => props.theme.colors.secondary};
  box-shadow: 0 0 3px rgba(0,0,0,.3);
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  transition: all 0.3s ease;

  &::before, &::after {
    display: block;
    width: 100%;
    height: 1;
    position: absolute;
    border-top: 1px dashed ${props => props.theme.colors.primary};
    content: '';
  }

  &::before {
    top: 4px;
  }

  &::after {
    bottom: 4px;
  }

  &:hover {
    color: #fff;
    background: ${props => props.theme.colors.primary};
    background: ${props => lighten(0.1, props.theme.colors.secondary)};
  }
`;

class CornerRibbon extends Component {
  render() {
    return <Ribbon href={ this.props.link }>{ this.props.text }</Ribbon>;
  }
}

export default CornerRibbon;
