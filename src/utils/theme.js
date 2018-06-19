import styled from 'styled-components';

const theme = {
  site: {
    width: '1260px'
  },
  colors: {
    primary: '#003E51', // Dark Blue
    secondary: '#00778B', // Blue
    tertiary: '#F2EECA', // Tan
    highlight: '#E04E39', // Orange
    black: '#373A36' //Black
  }
};

// Styles for elements inside content
const Content = styled.div`
  max-width: ${props => props.theme.site.width};
  margin: 0 auto;
  padding: 0px 1.0875rem 1.45rem;

  h1, h2, h3, h4, h5, h6, a{
    color: ${props => props.theme.colors.highlight};
  }

  strong{
    color: ${props => props.theme.colors.primary};
  }

  blockquote{
    border-left-color: ${props => props.theme.colors.secondary};

    q{
      display: block;
      margin-bottom: 0.5em;
      color: ${props => props.theme.colors.secondary};
    }

    cite{
      display: block;
      color: ${props => props.theme.colors.secondary};
    }
  }

`;

Content.defaultProps = theme;

export default { theme, Content };
