import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import * as WingsLeft from '../assets/svg/wings-left.svg';
import * as WingsRight from '../assets/svg/wings-right.svg';

const Wrapper = styled.div`
  padding: 1em 0;
  text-align: center;
`;

const Title = styled.h1`
  margin: 0 0 0.2em 0;
  font-size: 3em;
  color: ${props => props.theme.colors.primary};

  a{
    color: inherit;
    text-decoration: none;
  }
`;

const Tagline = styled.h2`
  margin: 0;
  font-size: 2.5em;
  color: ${props => props.theme.colors.secondary};
`;

const Wings = styled.div`
  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.md}em) {
    &::before, &::after{
      content: '';
      display: inline-block;
      outline: 1px dashed red;
      position: relative;
    }
  }
`;

const Branding = ({ title, tagline }) => (
  <Wrapper>
    <Wings>
      <Title>
        <Link to="/">{title}</Link>
      </Title>
      <Tagline>{tagline}</Tagline>
    </Wings>
  </Wrapper>
);

export default Branding;
