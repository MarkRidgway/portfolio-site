import { theme, Content } from '../utils/theme'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled, { ThemeProvider } from 'styled-components'
import '../theme/prism-cobalt2.css'

import Footer from '../components/footer'
import Header from '../components/header'
import OffCanvas from '../components/off-canvas'
import MenuBar from '../components/menu-bar';

const PageWrapper = styled.div`
  position: relative;
`;

const Page = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  position: absolute;
  top: 0;
  transition: left 0.3s ease;
  background: ${ props => props.theme.colors.primary };

  &.nav-open{
    left: 70%;

    &::before{
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: #fff;
      opacity: 0.6;
      content: '';
    }
  }

  &.nav-closed{
    left: 0;
  }
`;

class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = { navOpen: false }
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <PageWrapper>
          <OffCanvas
            navOpen={ this.state.navOpen }
            onNavClose={ () => this.onNavClose() } />
          <Page
            className={ this.state.navOpen ? 'nav-open' : 'nav-closed' }
            onClick={ () => { this.state.navOpen ? this.onNavClose() : null } }>
            <Helmet
              title={ this.props.data.site.siteMetadata.title }
              meta={[
                {
                  name: 'description',
                  content: this.props.data.site.siteMetadata.description,
                },
                {
                  name: 'keywords',
                  content: this.props.data.site.siteMetadata.keywrods,
                },
              ]}
            />
            <MenuBar
              navOpen={ this.state.navOpen }
              onNavToggle={ () => this.onNavToggle() } />
            <Header
              siteTitle={ this.props.data.site.siteMetadata.title }
              siteTagline={ this.props.data.site.siteMetadata.tagline } />
            <Content>{ this.props.children() }</Content>
            <Footer />
          </Page>
        </PageWrapper>
      </ThemeProvider>
    )
  }

  onNavClose(){
    this.setState({ navOpen: false });
  }

  onNavToggle(){
    this.setState( prevState => ({ navOpen: !prevState.navOpen }));
  }
}

Layout.propTypes = {
  children: PropTypes.func,
}

export const query = graphql`
  query SiteDataQuery {
    site {
      siteMetadata {
        title
        tagline
        description
        keywords
      }
    }
  }
`

export default Layout
