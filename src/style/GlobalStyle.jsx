import { createGlobalStyle } from 'styled-components';
import { SofiaProRegular } from '../assets/fonts';
import theme from './theme';

const { colors, fonts } = theme;

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'Sofia Pro Regular';
  font-style: medium;
  font-weight: medium;
  src: url(${SofiaProRegular}) format('woff');
}

@font-face {
  font-family: 'Product Sans';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/productsans/v5/HYvgU2fE2nRJvZ5JFAumwegdm0LZdjqr5-oayXSOefg.woff2) format('woff2');
}

body {
  margin: 0;
  background-color: ${colors.white};
  font-family: ${fonts.sofiaProRegular};
}

`;

export default GlobalStyle;
