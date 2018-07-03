import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Col, Row } from 'react-styled-flexboxgrid'

const FooterWrapper = styled.footer`
  color: ${ props => props.theme.colors.tertiary };
  padding: 1em 0;
  font-size: 0.8em;
  background: ${ props => props.theme.colors.primary };
`;

const Copyright = styled.p`
  margin-bottom: 0.5em ;
`;

const Wip = styled.p`
  margin: 0;
  font-family: Merriweather;
  font-style: italic;

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.md}em) {
    text-align: right;
  }
`;

const Footer = () => (
  <FooterWrapper>
    <Grid>
      <Row>
        <Col xs={12} md={6} lg={8}>
          <Copyright>&copy; Copyright Mark Ridgway 2018</Copyright>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <Wip>Always a work in progress</Wip>
        </Col>
      </Row>
    </Grid>
  </FooterWrapper>
);

export default Footer;
