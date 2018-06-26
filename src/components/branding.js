import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const Wrapper = styled.div`
  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.md}em) {
    display: flex;
    align-items: baseline;
    justify-content: flex-start;
  }
`;

const Title = styled.h1`
  margin: 0 0 0.2em 0;
  color: #fff;

  a{
    color: inherit;
    text-decoration: none;
  }

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.md}em) {
    margin: 0 0.5em 0 0;
  }
`;

const Tagline = styled.h2`
  margin: 0;
  color: ${props => props.theme.colors.tertiary};
`;

const Branding = ({ title, tagline }) => (
  <Wrapper>
    <Title>
      <Link to="/">{title}</Link>
    </Title>
    <Tagline>{tagline}</Tagline>
  </Wrapper>
);

export default Branding;
