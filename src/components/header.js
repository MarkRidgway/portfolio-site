import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import {Grid, Col, Row} from 'react-styled-flexboxgrid'

const defaultTheme = {
  theme: {
    colors: {
      primary: '#333'
    }
  }
};

const Wrapper = styled.header`
  background: ${props => props.theme.colors.primary};
  margin-bottom: 1.45rem;
`;

const Nav = styled.ul``;

const Title = styled.h1`
  margin: 0;
  color: #fff;

  a{
    color: inherit;
    text-decoration: none;
  }
`;

const Tagline = styled.h2`
  color: #fff;
`;

Wrapper.defaultProps = defaultTheme;

class Header extends Component {
  render(){
    return(
      <Grid>
        <Wrapper>
            <Row>
              <Title>
                <Link to="/">{ this.props.siteTitle }</Link>
              </Title>
              <Tagline>{ this.props.siteTagline }</Tagline>
            </Row>
        </Wrapper>
      </Grid>
    );
  }
}

export default Header;
