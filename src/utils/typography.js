import Typography from 'typography'
import altonTheme from 'typography-theme-alton'
import { theme } from './theme';

// Base overrides
altonTheme.baseFontSize = '16px' // was 20px.
altonTheme.bodyColor = theme.colors.black;

// Header overrides
altonTheme.headerFontFamily = ['Merriweather', 'serif'];
altonTheme.headerWeight = '400';

altonTheme.googleFonts = [
  {
    name: 'Merriweather',
    styles: ['700'],
  },
  {
    name: 'Open Sans',
    styles: ['200', '200i', '400', '400i', '700', '700i'],
  },
];

const typography = new Typography(altonTheme);

export default typography;
