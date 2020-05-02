import { createGlobalStyle } from 'styled-components';
import theme from './theme';
import { SofiaProMediumAz } from '../assets/fonts';
const { colors, fonts } = theme;

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  background-color: ${colors.white};
  font-family: ${fonts.sofiaPro};
}
@font-face {
  font-family: 'Sofia Pro Medium';
  font-style: medium;
  font-weight: medium;
  src: url(${SofiaProMediumAz}) format('woff');
}
@font-face {
  font-family: 'Product Sans';
  font-style: normal;
  font-weight: 400;
  src: local('Open Sans'), local('OpenSans'),
    url(https://fonts.gstatic.com/s/productsans/v5/HYvgU2fE2nRJvZ5JFAumwegdm0LZdjqr5-oayXSOefg.woff2) format('woff2');
}
`;

export default GlobalStyle;
