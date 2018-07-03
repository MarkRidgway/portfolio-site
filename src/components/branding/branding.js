import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import { WingLeft, WingRight } from './wings';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1em 0;
  font-size: 1rem;
  font-size: 1.25rem;
  text-align: center;

  transition: font-size 0.3s ease;

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.md}em) {
    font-size: 1.5rem;
  }

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.lg}em) {
    font-size: 2rem;
  }
`;

const LogoWrapper = styled.div`
  margin: 0 0.5em;
`;

const Title = styled.h1`
  margin: 0 0 0.2em 0;
  font-size: 1.5em;
  color: ${props => props.theme.colors.primary};

  a{
    color: inherit;
    text-decoration: none;
    white-space: nowrap;
  }
`;

const Tagline = styled.h2`
  margin: 0;
  font-size: 1em;
  color: ${props => props.theme.colors.secondary};
  white-space: nowrap;
`;

const Branding = ({ title, tagline }) => (
  <Wrapper>
    <WingLeft />
    <LogoWrapper>
      <Title>
        <Link to="/">{title}</Link>
      </Title>
      <Tagline>{tagline}</Tagline>
    </LogoWrapper>
    <WingRight />
  </Wrapper>
);

export default Branding;
