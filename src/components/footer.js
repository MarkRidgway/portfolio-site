import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Col, Row } from 'react-styled-flexboxgrid'

const FooterWrapper = styled.footer`
  padding: 1em 0;
  background: ${ props => props.theme.colors.primary };
`;

const Copy = styled.p`
  margin: 0;
  color: ${ props => props.theme.colors.tertiary };
  font-size: 0.8em;
`;

const Footer = () => (
  <FooterWrapper>
    <Grid>
      <Row>
        <Col>
          <Copy>&copy; Copyright Mark Ridgway 2018</Copy>
        </Col>
      </Row>
    </Grid>
  </FooterWrapper>
);

export default Footer;
