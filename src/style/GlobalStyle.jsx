import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: 'Sofia Pro Medium' !important;
}

@font-face {
  font-family: 'Sofia Pro Medium';
  font-style: medium;
  font-weight: medium;
  src: local('Sofia Pro Medium'),
    url('../assets/fonts/Sofia Pro Medium Az.woff') format('woff');
}
`;

export default GlobalStyle;
