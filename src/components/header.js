import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const defaultTheme = {
  theme: {
    site: {
      width: '960px'
    },
    colors: {
      primary: '#333'
    }
  }
};

const Wrapper = styled.header`
  background: ${props => props.theme.colors.primary};
  margin-bottom: 1.45rem;
`;

const Content = styled.div`
  max-width: ${props => props.theme.site.width};
  margin: 0 auto;
  padding: 1.45rem 1.0875rem;
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
Content.defaultProps = defaultTheme;

class Header extends Component {
  render(){
    return(
      <Wrapper>
        <Content>
          <Title>
            <Link to="/">{ this.props.siteTitle }</Link>
          </Title>
          <Tagline>{ this.props.siteTagline }</Tagline>
        </Content>
      </Wrapper>
    );
  }
}

export default Header;
