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
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Mark Ridgway is a Web Developer' },
          { name: 'keywords', content: 'Mark Ridgway, Web Developer, Javascript, React, Angular' },
        ]}
      />
      <Header siteTitle={data.site.siteMetadata.title} />
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
