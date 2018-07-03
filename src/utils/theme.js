import styled from 'styled-components';

const theme = {
  flexboxgrid: {
    gridSize: 12, // columns
    gutterWidth: 1, // rem
    outerMargin: 2, // rem
    mediaQuery: 'only screen',
    container: {
      sm: 26, // rem
      md: 47, // rem
      lg: 80  // rem
    },
    breakpoints: {
      xs: 0,  // em
      sm: 26, // em
      md: 47, // em
      lg: 80  // em
    }
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
const Content = styled.div `
  padding: 2em 0;
  background: #fff;

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

const Title = styled.h1``;

Content.defaultProps = theme;

export default {
  theme,
  Content,
  Title
};