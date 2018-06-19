import Typography from 'typography'
import altonTheme from 'typography-theme-alton'
import { theme } from './theme';

// Base overrides
altonTheme.baseFontSize = '16px' // was 20px.
altonTheme.bodyColor = theme.colors.black;

// Header overrides
altonTheme.headerFontFamily = ['Merriweather', 'serif'];
altonTheme.headerWeight = '400';

const typography = new Typography(altonTheme);

export default typography;
