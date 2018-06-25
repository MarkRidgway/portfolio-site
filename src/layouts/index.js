import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import '../theme/prism-cobalt2.css';

import { theme, Content } from '../utils/theme';
import Header from '../components/header';

const Layout = ({ children, data }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Helmet
        title={ data.site.siteMetadata.title }
        meta={[
          { name: 'description', content: data.site.siteMetadata.description },
          { name: 'keywords', content: data.site.siteMetadata.keywrods },
        ]}
      />
      <Header
        siteTitle={ data.site.siteMetadata.title }
        siteTagline={ data.site.siteMetadata.tagline }/>
      <Content>
        {children()}
      </Content>
    </div>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
